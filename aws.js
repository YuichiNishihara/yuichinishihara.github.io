// Configure AWS SDK
AWS.config.update({
  region: 'ap-southeast-1',
  credentials: {
    accessKeyId: 'your-access-key-id',
    secretAccessKey: 'your-secret-access-key',
    sessionToken: 'your-session-token', // Include if using temporary security credentials
  },
});
