import { supabase } from "../../config/supabase.adapter"
import { Request, Response } from "express"


export class SupabaseController {

    public static getTables = async ( req:Request, res:Response ) => {
        
        if(req.query.table){
            const table = +req.query.table!

            const { data, error } = await supabase
            .from('pedidos')
            .select()
            .eq('table', table)

            return res.status(200).json( data )
        }
        


        



    }
}