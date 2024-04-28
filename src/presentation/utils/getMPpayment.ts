import MercadoPagoConfig, { Payment } from "mercadopago";
import { envs } from "../../config/envs";

export const GetMPPayment = async ( id:number ) => {

    const client = new MercadoPagoConfig({ accessToken: envs.ACCESS_TOKEN });
    const payment = new Payment(client);

    try {
        const paymentData = await payment.get({ id });

        return paymentData; // Devuelve los datos del pago
    } catch (error) {
        console.error('Error al obtener el pago:', error);
        throw error; // Lanza el error para que pueda ser manejado por el código que llama a esta función
    }

}