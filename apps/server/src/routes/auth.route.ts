import express from 'express'
import { getLogin, register } from '@controllers/auth.controller'
const router = express.Router()

router.get('/login', getLogin)
router.post('/register', register)
export default router
