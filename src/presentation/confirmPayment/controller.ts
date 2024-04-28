import {Request, Response} from 'express'
// import { getTable } from "../utils/get.supabase.Table"
// import { updateOrder } from "../utils/update.supabase.Order"
// import { updateTable } from "../utils/update.supabase.Table"
// import { updateTablePayed } from "../utils/updateTablePayed"


export class ConfirmPaymentController {

    public static SuccessPayment = async (req:Request, res:Response) => {

        console.log('Empezo el success payment')

        return res.status(200).json('Exito')

        // const id = req.body.external_reference

        // const pagado = req.body.total_amount

        // try {
        //     const table = await getTable(req, res, id)

        //     console.log(table)

        //     if( table ){

        //       let nuevoValor = table.valor! - pagado

        //       if( nuevoValor=== 0){
        //         await updateTablePayed(req, res, table.id, nuevoValor)
        //       } else{
        //         await updateTable(req, res, table.id, nuevoValor)
        //       }
        //       await updateOrder(req, res, table.id)
        //     }

        //     return res.status(200).json('Exito')
           
        // } catch (error) {
        //     console.log(error)
        //     console.log(`La mesa con el id ${id} no existe`)
        //     return res.status(400).json({error})
        // }

    }
}