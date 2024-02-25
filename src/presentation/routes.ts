import { Router } from 'express';
import { PaymentRoutes } from './payment/routes';
import { WebhookRoutes } from './webhook/routes';



export class AppRoutes {
  
  static get routes(): Router {

    const router = Router();
    router.use('/rest/v1/preference', PaymentRoutes.routes);
    router.use('/rest/v1/webhook', WebhookRoutes.routes);


    return router;
  }
}

