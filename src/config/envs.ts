import 'dotenv/config';
import { get } from 'env-var';


export const envs = {

  PORT: get('PORT').required().asPortNumber(),
  ACCESS_TOKEN: get('ACCESS_TOKEN').required().asString(),
  HOST: get('HOST').required().asString(),

}