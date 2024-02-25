import { Request, Response } from "express"
import MercadoPagoConfig, { Preference } from "mercadopago";
import { envs } from "../../config/envs";
import { preference } from "../plugins/mercadopago";
import { PreferenceDTO } from "../../domain/dtos";

export class PaymentController {
    //DI
    constructor(
      private readonly table:string='address',
    ) {}

    public static createPreference = async (req: Request, res:Response) => {

        const preferencia = preference;

        try {
            const preferenceDTO = new PreferenceDTO({ items: req.body.items });

            preferenceDTO.validateItems();

            const back_urls = {
            failure: `${envs.HOST}/failure`,
            pending: `${envs.HOST}/pending`,
            success: `${envs.HOST}/success`
            };

            const data = await preferencia.create({
            body: {
                ...preferenceDTO,
                back_urls: back_urls,
                notification_url:`${envs.HOST}/webhook`
            },
        });
            return res.json( data )

        } catch (error) {
            console.log(error)
            return res.status(500).json({error})
        }
    }

    public static getPreference = async(req:Request, res:Response) =>{
        const client = new MercadoPagoConfig({ accessToken: envs.ACCESS_TOKEN, options: { timeout: 5000 } });
        const preference = new Preference(client);

        try {
        const id = req.query.id
        console.log(typeof(id))
        
            if(typeof id === 'string'){
                const data = await preference.get({ preferenceId: id })
                console.log(data)
                return res.status(200).json(data)
            } else{
                return 'El dato debe ser un string'
            }

        } catch (error) {
            console.log(error)
            return res.status(500).json({error})
        }
        
        
    }
 }