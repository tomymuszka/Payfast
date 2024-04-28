import { getOrder } from "./get.supabase.Order"
import { getTable } from "./get.supabase.Table"
import { updateOrder } from "./update.supabase.Order"
import { updateTable } from "./update.supabase.Table"
import { updateTablePayed } from "./updateTablePayed"
import {Request, Response} from 'express'


export const updateGeneral = async (req:Request, res:Response, payment:any) => {
            console.log('principio')

            const pedidos_lenght = payment![0].pedidos.length
            console.log('La longitud es:',pedidos_lenght)
            let i=0

            while( i<pedidos_lenght){
                console.log('Ingreso al bucle')

            const pedido = payment![0].pedidos[i]

            console.log('El pedido es:',pedido)
            const order:any = await getOrder( req, res, pedido)
            const order_id = order[0].id
            const table_id = payment[0].id
            console.log('La order es:',order)
            await updateOrder(req, res, order_id)

            const pagado = order[0].price
            console.log('Lo pagado es:', pagado)

            try {
                const table = await getTable(req, res, table_id)

                console.log('La mesa es:',table)

                if( table ){

                  let nuevoValor = table.valor! - pagado

                  if( nuevoValor=== 0){
                    await updateTablePayed(req, res, table.id, nuevoValor)
                  } else{
                    await updateTable(req, res, table.id, nuevoValor)
                  }
                }
              }catch(error){
                console.error({error})
              }
              i++
              console.log('fin')

    }
}