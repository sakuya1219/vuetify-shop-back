import { Router } from 'express'
import * as auth from '../middlewares/auth.js'
import admin from '../middlewares/admin.js'
import { create, getAll, getId, remove } from '../controllers/reservation.js'

const router = Router()

router.post('/', auth.jwt, create) // 用戶創建預約
router.get('/all', auth.jwt, admin, getAll) // 管理員查看所有預約
router.get('/:id', auth.jwt, getId) // 用戶查看自己的預約
router.delete('/:id', auth.jwt, admin, remove) // 管理員刪除預約

export default router
