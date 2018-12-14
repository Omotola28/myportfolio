export const getEnvironment = () => process.env.NODE_ENV
  ? process.env.NODE_ENV
  : 'development';

  export const getApiUrl = () => {
    switch (getEnvironment()) {
      case 'production':
        return 'https://<your-domain-name>';
      case 'development':
      default:
        return 'http://localhost:3000';
    }
  };

  export const getAppUrl = () => {
  switch (getEnvironment()) {
    case 'production':
      return 'https://<your-domain-name>';
    case 'development':
    default:
      return 'http://localhost:3000';
  }
};

