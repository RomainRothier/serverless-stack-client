export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "eu-west-1",
    BUCKET: "my-aws-notes-app-uploads"
  },
  apiGateway: {
    REGION: "eu-west-1",
    URL: "https://8ocus3lqth.execute-api.eu-west-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "eu-west-1",
    USER_POOL_ID: "eu-west-1_C5YHrhfih",
    APP_CLIENT_ID: "6qv38027lh0arjgsta1d0049vh",
    IDENTITY_POOL_ID: "eu-west-1:fff87c6d-1b9d-4aa1-b764-11000cc34650"
  }
};
