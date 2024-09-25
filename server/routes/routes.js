import { Router } from "express";
import router from "./record";
const router = Router();


/**POST METHODSS */
router.route('/register').post((req,res) => res.json('register route')); // register user
router.route('/registerMail').post(); //register given email address
router.route('/authenticate').post(); // authenticate user
router.route('/login').post();// login in app



/**GET METHODS */
router.route('/user/:username').get(); // gets users username
router.route('/generateOTP').get();// generate random OTP
router.route('/verifyOTP').get();// verifies generated OTP
router.route('/createResetSession').get();// resets all variables


/** PUT METHODS */
router.route('/updateuser').put();// updates  user profile
router.route('/resetPassword').put();// resets the users password


export default router;