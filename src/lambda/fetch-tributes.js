const axios = require("axios");

exports.handler = async (event, context, callback) => {
    try {
        const query = `
        query {
            allTributes {
                data{
                    name
                    relation
                    content
                    _id
                }
            }
        }
        `;
        const response = await axios({
            url: "https://graphql.fauna.com/graphql",
            method: "POST",
            headers: {
                Authorization: `Bearer ${process.env.FAUNA_SECRET}`,
            },
            data: JSON.stringify({ query }),
        });

        return {
            statusCode: 200,
            body: JSON.stringify(response.data.data),
        };
    } catch (err) {
        console.log("INSIDE CATCH BLOCK");
        console.log(err);
        callback(err, null);
    }
};
