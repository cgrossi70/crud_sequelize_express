// Verificar que funcionen createdAt and updatedAt

import dotenv from 'dotenv'
import express from 'express'
import morgan from 'morgan'
import usersRouter from './routes/users.routes'
import sequelize from './database'

dotenv.config()
const port = process.env.PORT || 3000

const app = express()

// Middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// Routes
app.use('/users',usersRouter)

// Initialize
//User.sync({force: false})
app.listen(port,()=>{

    console.log('Server is listening on port ', port)
    sequelize.sync({force: false})
    .then (function (){
        console.error('Connected to database');
    })
    .catch (function (err){
        console.log('Connection Error: ',err.original.sqlMessage);
    })   

})
