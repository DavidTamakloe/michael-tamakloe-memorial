const moment = require("moment");
const axios = require("axios");

exports.handler = async (event, context, callback) => {
    try {
        // get body from request
        const body = JSON.parse(event.body);
        const date = moment().format("YYYY-MM-DD");

        const query = `
mutation {
    createTribute(
        data: {
            name: "${body.name}"
            relation: "${body.relation}"
            contact: "${body.contact}"
            content: "${body.content}"
            date: "${date}"
        }
    ) 
    {
        _id
    }
  }`;

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
