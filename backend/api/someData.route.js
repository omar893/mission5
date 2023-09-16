import express from 'express'
import MyDataCtrl from './myData.controller.js';

const router = express.Router();

router.route('/').get(MyDataCtrl.apiGetMyData);

export default router;