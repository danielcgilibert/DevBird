import express from 'express'
import { getUser, deleteUser, getAll } from '@controllers/user.controller'
const router = express.Router()

router.get('/', getUser)
router.get('/all', getAll)

export default router
