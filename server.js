const express = require('express')
const authRoutes = require('./routes/auth.js')
const postRoutes = require('./routes/posts.js')
const userRoutes = require('./routes/users.js')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const app = express()
const {db} = require('./db.js')


const port = process.env.PORT || 8000
app.use(express.json())
app.use(cors())
app.use(cookieParser())

app.use("/api/auth",authRoutes)
app.use("/api/user",userRoutes)
app.use("/api/post",postRoutes)


app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})