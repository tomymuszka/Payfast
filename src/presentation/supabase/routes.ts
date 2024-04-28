import { Router } from "express";
import { SupabaseController } from "./controller";


export class SupabaseRoutes {

    static get routes():Router {

        const router=Router();

        router.get('/', SupabaseController.getTables)

        return router
    }

    
}