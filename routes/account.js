import { Router } from 'express'
import { getAllAccounts, deleteAccount } from '../controllers/account.js'

const router = Router()

router.get('/', getAllAccounts)
router.delete('/:id', deleteAccount)

export default router
