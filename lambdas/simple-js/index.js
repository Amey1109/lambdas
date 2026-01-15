exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello from plain JavaScript Updated Lambda with Detect changed Lambdas and Layers! Changed V1",
      input: event
    })
  };
};
