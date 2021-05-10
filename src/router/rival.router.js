import express from 'express';
import ctrl from '../controllers//rivals.controller';

const router = express.Router();

router.route('/rivals')
    .get(ctrl.list)
    .post(ctrl.create);

router.route('/rivals/:id')
    .get(ctrl.read)
    .post(ctrl.update)
    .delete(ctrl.remove);


export default router;