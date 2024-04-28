 import {Request, Response} from 'express'
import { supabase } from '../../config/supabase.adapter'
 
 export const getTable = async ( req:Request, res:Response, id:number ) => {
        
        const table = id

        try {
            const { data, error } = await supabase
            .from('mesas')
            .select()
            .eq('id', table)

            if (data) {
                return data[0];
            } else {
                // Maneja el caso en que 'data' es null, por ejemplo, devolviendo un mensaje de error
                console.error('No se encontraron datos');
                return null; // O maneja el error como prefieras
            }
        } catch (error) {
            console.error({error})
            return null
            
        }
    }