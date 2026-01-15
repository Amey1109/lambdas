const { v4: uuidv4 } = require("uuid");

exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello from Node.js Lambda with node_modules! v1",
      requestId: uuidv4(),
      input: event
    })
  };
};
