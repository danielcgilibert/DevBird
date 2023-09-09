import express from 'express'
import { getLogin } from '@controllers/auth.controller'
const router = express.Router()

router.get('/login', getLogin)
export default router
