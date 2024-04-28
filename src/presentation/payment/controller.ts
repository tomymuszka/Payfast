// import MercadoPagoConfig, { Payment } from "mercadopago";
// import { envs } from "../../config/envs";
// import {Request, Response} from 'express';


// // export class PaymentController {

// //     public static GetPayment = async (req:Request, res:Response) => {

// //         const client = new MercadoPagoConfig({ accessToken: envs.ACCESS_TOKEN });
// //         const payment = new Payment(client);

// //         try {
// //             const paymentData = await payment.get({ id });
// //             return paymentData; 
// //         } catch (error) {
// //             console.error('Error al obtener el pago:', error);
// //             throw error; 
// //         }

// //     }
// // }