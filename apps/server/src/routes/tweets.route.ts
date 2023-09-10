import express from 'express'
import { getAll } from '@controllers/tweets.controller'
const router = express.Router()

router.get('/all', getAll)
export default router
