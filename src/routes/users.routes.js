import { Router } from 'express'
import { getUser, getUsers, addUser, deleteUser, updateUser } from '../controllers/users.controllers'

const router = Router()

router.get('/:id',getUser)
router.get('/',getUsers)
router.post('/',addUser)
router.delete('/:id',deleteUser)
router.put('/:id',updateUser)

export default router
