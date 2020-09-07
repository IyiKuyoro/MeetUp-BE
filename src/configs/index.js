import dotenv from 'dotenv';

dotenv.config();

/**
 * @description Generates an object of config parameters based in the
 * app environment
 *
 * @returns A javascript object containing configuration parameters
 */
function generateConfig() {
    switch (process.env.NODE_ENV) {
      case 'production':
        return {
          API_VERSION: process.env.API_VERSION,
          BASE_URL: process.env.BASE_URL,
          SALT: process.env.SALT,
          SECRET: process.env.SECRET,
          NODE_ENV: process.env.NODE_ENV,
          HTTP_PORT: process.env.HTTP_PORT,
          HTTPS_PORT: process.env.HTTPS_PORT,
        };
      default:
        return {
          API_VERSION: process.env.API_VERSION,
          BASE_URL: process.env.BASE_URL,
          SALT: process.env.SALT,
          SECRET: process.env.SECRET,
          NODE_ENV: process.env.NODE_ENV,
          HTTP_PORT: process.env.HTTP_PORT,
          HTTPS_PORT: process.env.HTTPS_PORT,
        };
    }
  }
  
  export default generateConfig();
