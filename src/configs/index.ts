import dotenv from 'dotenv';

dotenv.config();

interface JWTConfig {
  secretKey: string;
  expiresIn: string | number;
}

const jwtConfig: JWTConfig = {
  secretKey: process.env.SECRET_KEY || '',
  expiresIn: process.env.EXPIRES_IN || '24h',
};

const baseUrl: string =
  process.env.NODE_ENV === 'production'
    ? process.env.PROD_URL
    : process.env.DEV_URL;

export default jwtConfig;
export { baseUrl };
