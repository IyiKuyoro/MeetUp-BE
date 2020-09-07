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
        DATABASE_USERNAME: process.env.POSTGRES_PROD_USERNAME,
        DATABASE_PASSWORD: process.env.POSTGRES_PROD_PASSWORD,
        DATABASE: process.env.POSTGRES_PROD_DB,
        DATABASE_HOST: process.env.POSTGRES_HOST,
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
        DATABASE_USERNAME: process.env.POSTGRES_DEV_USERNAME,
        DATABASE_PASSWORD: process.env.POSTGRES_DEV_PASSWORD,
        DATABASE: process.env.POSTGRES_DEV_DB,
        DATABASE_HOST: process.env.POSTGRES_HOST,
        SALT: process.env.SALT,
        SECRET: process.env.SECRET,
        NODE_ENV: 'development',
        HTTP_PORT: process.env.HTTP_PORT,
        HTTPS_PORT: process.env.HTTPS_PORT,
      };
  }
}

export default generateConfig();
