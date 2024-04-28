import { Router } from 'express';
import { PreferenceController } from './controller';
import { postPreferenceValidation } from '../middleware/validate.payments';

export class PreferenceRoutes {
  
  static get routes(): Router {

    const router = Router();

    router.post('/', postPreferenceValidation,PreferenceController.createPreference);
    router.get('/:id', PreferenceController.getPreference)

    return router;
  }
}

