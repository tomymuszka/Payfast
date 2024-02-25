import MercadoPagoConfig, { Preference } from "mercadopago";
import { envs } from "../../config/envs";

const client = new MercadoPagoConfig({ accessToken: envs.ACCESS_TOKEN, options: { timeout: 5000 } });

export const preference = new Preference(client)