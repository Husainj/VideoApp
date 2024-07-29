import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
const app = express()


//middleware to allow only the provided url to connect with frontend
app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials: true
}))

//Accepting json also with size limit
app.use(express.json({limit:"16kb"}))
 
//  used to accept url's and encode them , like we need to tell express that space " " is converted into %20 ,
//  similarly it will help in encoding it.
app.use(express.urlencoded({extended:true , limit:"16kb"}))

//to keep assets or images , see you have made a public folder 
app.use(express.static("public")) 
app.use(cookieParser())


//routes import
import userRouter from './routes/user.routes.js'
import router from "./routes/user.routes.js"
import videoRouter from "./routes/video.routes.js"
import tweetRouter from "./routes/tweet.routes.js"
import subscriptionRouter from "./routes/subscription.routes.js"
import playlistRouter from "./routes/playlist.routes.js"
import likeRouter from "./routes/like.routes.js"

//routes declaration
app.use("/api/v1/users" , userRouter)
app.use("/api/v1/videos", videoRouter)
app.use("/api/v1/tweets", tweetRouter)
app.use("/api/v1/subscriptions", subscriptionRouter)
app.use("/api/v1/playlist", playlistRouter)
app.use("/api/v1/likes", likeRouter)

export default router

export {app}