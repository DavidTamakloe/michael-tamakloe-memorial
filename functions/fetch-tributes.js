exports.handler = async (event) => {
    const query = `
    query {
        allTributes {
            name
            relation
            content
        }
    }
    `;
    const url = "https://graphql.fauna.com/graphql";
    const opts = {
        method: "POST",
        headers: {
            Authorization: `Bearer ${process.env.FAUNA_SECRET}`,
        },
        body: JSON.stringify(query),
    };
    // use body to create tribute in FaunaDB
    const response = await fetch(url, opts);
    return {
        statusCode: 200,
        body: JSON.stringify(response.data),
    };
};
