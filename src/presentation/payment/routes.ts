import { Router } from 'express';
import { PaymentController } from './controller';

export class PaymentRoutes {
  
  static get routes(): Router {

    const router = Router();
    router.post('/', PaymentController.createPreference);



    return router;
  }
}

