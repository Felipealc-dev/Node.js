import express from 'express'
import { PrismaClient } from './generated/prisma/index.js'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())
const users = []

app.get('/usuarios',async (req, res) => {
    const user = await prisma.user.findMany()
    
    res.status(200).json({ user })

})
app.post('/usuarios', async (req, res) => {
   const user = await prisma.user.create({
        data: {
            email: req.body.email,
            age: req.body.age,
            name: req.body.name
        }
    })
    console.log(user)

    res.status(201).json({ message: "Usuario Criado com sucesso" })
})



app.put('/usuarios/:id', async (req, res) => {
   const user = await prisma.user.update({
    where:{
        id:req.params.id

    },
        data: {
            email: req.body.email,
            age: req.body.age,
            name: req.body.name
        }
    })
    console.log(user)

    res.status(200).json(user)
})

app.delete('/usuarios/:id', async (req, res) => {
    await prisma.user.delete({
        where:{
            id: req.params.id
        }
    })
res.status(200).json({message:"usuário deletado com sucesso!"})
})



app.listen(3001)