import {Request, Response} from 'express'
import { supabase } from '../../config/supabase.adapter'
 
 export const getOrder = async ( req:Request, res:Response, id:number ) => {
        
        const order = id

        try {
            const { data, error } = await supabase
            .from('pedidos')
            .select()
            .eq('id', order)
    
            return ( data )
            
        } catch (error) {
            console.error({error})
            return error
        }


    }