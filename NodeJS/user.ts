import { hash } from 'crypto'
import prisma from './db'

export const createNewUSer = (req, res) => {
    const user = await prisma.user.create({
        data:{
            username: req.body.username,
            password: await hashPassword(req.body.password)
        }
    })
}