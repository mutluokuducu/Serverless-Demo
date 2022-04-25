const AWS = require("aws-sdk")

const fetchAllTodo = async (event) => {

  const dynamodb = new AWS.DynamoDB.DocumentClient();

  let allTodo;

  try {
      const result = await dynamodb.scan({ TableName: "TodoTable" }).promise();
      allTodo = result.Items
  } catch (error) {
      console.log(error)
  }

  return {
    statusCode: 200,
    body: JSON.stringify(allTodo)
  };
};

module.exports = {
  handler: fetchAllTodo
}
