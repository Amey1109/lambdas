exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello from plain JavaScript Updated Lambda!",
      input: event
    })
  };
};
