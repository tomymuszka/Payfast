import { Router } from 'express';
import { PreferenceRoutes } from './preference/routes';
import { WebhookRoutes } from './webhook/routes';
import { SupabaseRoutes } from './supabase/routes';
import { ConfirmPaymentRoutes } from './confirmPayment/routes';
//import { PaymentRoutes } from './payment/routes';



export class AppRoutes {
  
  static get routes(): Router {

    const router = Router();
    router.use('/rest/v1/preference', PreferenceRoutes.routes);
    router.use('/rest/v1/webhook', WebhookRoutes.routes);
    router.use('/rest/v1/supabase', SupabaseRoutes.routes);
    router.use('/rest/v1/confirmpayment', ConfirmPaymentRoutes.routes);
    //router.use('/rest/v1/payment', PaymentRoutes.routes);


    return router;
  }
}

