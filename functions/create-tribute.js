exports.handler = async (event) => {
    // get body from request
    const body = JSON.parse(event.body);

    const query = `
    mutation {
        createTribute(
            data: {
                name: ${body.name},
                relation: ${body.relation},
                contact: ${body.contact},
                content: ${body.content}
            }
        ) 
        {
            _id
        }
      }`;
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
