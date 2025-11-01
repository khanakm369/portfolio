import express from 'express'
import { createUser } from '../controller/user.controller.js'

const router = express.Router();


router.post('/user' , createUser);

export default router;