import express from 'express'
import { getMaterials } from '../controllers/material.controllers.js'

const router = express.Router()

router.get('/get', getMaterials)

export default router