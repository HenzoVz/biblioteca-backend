import { Router } from 'express';
import { literaryWorksRouter } from '../controllers/CreateLiteraryWorksController';


const routers = Router();

routers.use('/obras', literaryWorksRouter);

export { routers };
