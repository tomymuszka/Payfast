import { Router } from 'express';
import { WebhookController } from './controller';



export class WebhookRoutes {
  
  static get routes(): Router {

    const router = Router();
    router.post('/', WebhookController.receiveWebhook);


    return router;
  }
}

