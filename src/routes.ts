import { Router } from 'express';

import AppsController from './app/controllers/AppsController';
import CepsController from './app/controllers/CepsController';
import VehiclesController from './app/controllers/VehiclesController';

const router = Router();

router.post('/palindromes', AppsController.getPalindromes);
router.post('/purchase', AppsController.getPurchaseInfos);
router.post('/vehicles', VehiclesController.getVehiclesData);
router.post('/ceps', CepsController.getCeps);

export default router;
