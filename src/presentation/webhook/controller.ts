import { Request, Response } from "express"
import { getTable } from "../utils/get.supabase.Table";
import { updateTablePayed } from "../utils/updateTablePayed";
import { updateTable } from "../utils/update.supabase.Table";
import { getPayment } from "../utils/get.supabase.Payment";
import { GetMPPayment } from "../utils/getMPpayment";
import { getOrder } from "../utils/get.supabase.Order";
import { updateOrder } from "../utils/update.supabase.Order";
import { updateGeneral } from "../utils/updateGeneral";


export class WebhookController {

    //DI
    constructor() {}

     public static  receiveWebhook = async (req:Request, res:Response) => {

      console.log('El body es',req.body)
      //console.log('El webhook fue recibido 2')

      if(req.body.type==='payment'){
        console.log('El id es:',req.body.data.id)
        const id = +req.body.data.id
        const pago = await GetMPPayment(id)

        const status = pago.status;
        if(status=='approved'){
          const ext_ref = +pago.external_reference!
          console.log('Ext ref es:',ext_ref)
          const payment = await getPayment(req, res, ext_ref)
          console.log('El payment es:',payment)
          if(payment && payment.length > 0){
            const ben = await updateGeneral(req, res, payment)
            // const pedidos = payment![0].pedidos[0]
            // console.log('El pedido es:',pedidos)
            // const order:any = await getOrder( req, res, pedidos)
            // const order_id = order[0].id
            // const table_id = payment[0].id
            // console.log('La order es:',order)
            // await updateOrder(req, res, order_id)

            // const pagado = order[0].price
            // console.log('Lo pagado es:', pagado)

            // try {
            //     const table = await getTable(req, res, table_id)

            //     console.log('La mesa es:',table)

            //     if( table ){

            //       let nuevoValor = table.valor! - pagado

            //       if( nuevoValor=== 0){
            //         await updateTablePayed(req, res, table.id, nuevoValor)
            //       } else{
            //         await updateTable(req, res, table.id, nuevoValor)
            //       }
            //     }
            //   }catch(error){
            //     console.error({error})
            //   }
              
              
            }
      }
      return res.status(200).json('Exito con el webhook')
  
    }
  }
}