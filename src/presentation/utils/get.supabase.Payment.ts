 import {Request, Response} from 'express'
import { supabase } from '../../config/supabase.adapter'
 
 export const getPayment = async ( req:Request, res:Response, id:number ) => {
        
        const payment = +id

    try {

        const { data, error } = await supabase
        .from('pagos')
        .select()
        .eq('id', payment )

        console.log( 'La data es:',data )

        return ( data )
        
    } catch (error) {

        console.log({error})

    }
}