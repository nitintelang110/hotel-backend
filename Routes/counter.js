import express from "express";
import { getAllCounter,addNewCounter,bookCounter,deleteCounter,addNewOrderMenuCounter,orderDetailsPlease,moveNewOrderToCompleteMenuCounter} from "../Controller/counter.js";

const router = express.Router();
router.route('/get/counter').get(getAllCounter);
router.route('/add/counter').post(addNewCounter);
router.route('/addOrderMenu/counter').post(addNewOrderMenuCounter);
router.route('/moveCompleteOrderMenu/counter').post(moveNewOrderToCompleteMenuCounter);
router.route('/book/counter/:id').put(bookCounter);
router.route('/orderDetails/counter/:id').get(orderDetailsPlease);
router.route('/delete/counter/:id').delete(deleteCounter);

export { router as counterRouter }


