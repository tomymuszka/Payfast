import 'dotenv/config';
import { get } from 'env-var';


export const envs = {

  PORT: get('PORT').required().asPortNumber(),
  MERCADOPAGO_ACCESS_TOKEN: get('MERCADOPAGO_ACCESS_TOKEN').required().asString(),
  HOST: get('HOST').required().asString(),
  SUPABASE_URL: get('SUPABASE_URL').required().asString(),
  SUPABASE_ANON_KEY: get('SUPABASE_ANON_KEY').required().asString(),

}