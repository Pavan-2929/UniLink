import express from 'express'
import { createDoubt, getDoubtById, getDoubts } from '../controllers/Doubt.controllers.js'
import verifyToken from '../middlewares/verifyToken.js'

const router = express.Router()

router.get("/get", getDoubts)
router.get("/get/:id", getDoubtById)
router.post("/create", verifyToken, createDoubt)

export default router