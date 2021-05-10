import express from 'express';
import ctrl from '../controllers/players.controller';

const router = express.Router();

router.route('/players')
    .get(ctrl.list)
    .post(ctrl.create);

router.route('/players/:id')
    .get(ctrl.read)
    .post(ctrl.update)
    .delete(ctrl.remove);


export default router;
