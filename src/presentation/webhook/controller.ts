import { Request, Response } from "express"
import MercadoPagoConfig, { Preference } from "mercadopago";
import { envs } from "../../config/envs";

interface OptionsPayment {
    transaction_amount: number;
    description: string
    payment_method_id: string;
    email: string
  }

export class WebhookController {

    // transaction_amount: number;
    // description: string
    // payment_method_id: string;
    // email: string

    //DI
    constructor(
      private readonly table:string='address',
      //options:OptionsPayment,
    ) {
        // const {transaction_amount, description, payment_method_id, email}= options
        // this.transaction_amount=transaction_amount
        // this.description=description
        // this.payment_method_id=payment_method_id
        // this.email= email
    }

     public static  receiveWebhook = async (req:Request, res:Response) => {
        const client = new MercadoPagoConfig({ accessToken: envs.ACCESS_TOKEN, options: { timeout: 5000 } });
        const preference = new Preference(client);

        //const id = req.body.data.id
        const id = req.query.id

        try {
            if(typeof id === 'string'){
                const find = await preference.get({ preferenceId: id })
                console.log(find)
                return res.status(200).json(find)
            }else {
                    return res.status(400).json('El id debe ser un string')
                }
        } catch (error) {
            console.log(error)
            return res.status(400).json({error})
        }
  
}
 }