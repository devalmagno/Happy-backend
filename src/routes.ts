import { Router } from 'express';
import multer from 'multer';

import uploudConfig from './config/uploud';
import OrphanagesControllers from './controllers/OrphanagesControllers';

const routes = Router();
const uploud = multer(uploudConfig);

routes.get('/orphanages', OrphanagesControllers.index);
routes.get('/orphanages/:id', OrphanagesControllers.show);
routes.post('/orphanages', uploud.array('images'), OrphanagesControllers.create);

export default routes;