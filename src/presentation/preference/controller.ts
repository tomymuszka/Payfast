import { Request, Response } from "express"
import MercadoPagoConfig, { Preference } from "mercadopago";
import { envs } from "../../config/envs";
import { PreferenceDTO } from "../../domain/dtos";
import { preference } from "../../config/mercadopago.adapter";

export class PreferenceController {
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
            failure: `https://applashsolutions.com/`,
            pending: `https://applashsolutions.com/`,
            success: `https://applashsolutions.com/`
            };

            const data = await preferencia.create({
            body: {
                ...preferenceDTO,
                back_urls: back_urls,
                notification_url:`${envs.HOST}/rest/v1/webhook`,
                external_reference: req.body.external_reference
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
        const id = req.params.id
        console.log(id)
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