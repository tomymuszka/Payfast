 import {Request, Response} from 'express'
import { supabase } from '../../config/supabase.adapter'
 
 export const  updateTable = async ( req:Request, res:Response, id:number, value:number ) => {
        
        const table = id

        try {

            const { error } = await supabase
            .from('mesas')
            .update({ valor: value})
            .eq('id', table)
            
        } catch (error) {
            console.log({error})
            return error
            
        }



    }