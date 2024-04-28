 import {Request, Response} from 'express'
import { supabase } from '../../config/supabase.adapter'
 
 export const updateOrder = async ( req:Request, res:Response, id:number ) => {
        
        const order = id

        try {
            const { error } = await supabase
            .from('pedidos')
            .update({ payed: true })
            .eq('id', order)
            
        } catch (error) {
            console.error({error})
            return error
            
        }

    }