import { Router } from "express";
import { ConfirmPaymentController } from "./controller";


export class ConfirmPaymentRoutes {

    static get routes():Router {

        const routes=Router()

        routes.get('/success', ConfirmPaymentController.SuccessPayment)

        return routes
    }
}