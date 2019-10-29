require("dotenv").config()
const express = require("express");
const massive = require('massive');
const session = require('express-session');
const {SERVER_PORT} = process.env
const {SESSION_SECRET} =process.env
const AuthCont = require("./controllers/authController");
const PostCont = require("./controllers/postController");



const app = express();
app.use(express.json());


massive(process.env.CONNECTION_STRING).then(dbInstance => {
    app.set("db", dbInstance);
    console.log("Database Connected :D")
})

app.use(session ({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 3
    }
}))


//AUTH ENDPOINTS
app.get("/auth/user", AuthCont.getUser);
app.post("/auth/register", AuthCont.register);
app.post("/auth/login", AuthCont.login);
app.post("/auth/logout", AuthCont.logout);

//POST ENDPOINTS
app.get("/api/post/:post_id", PostCont.getByPostId);
app.get("/api/posts", PostCont.getAllPosts);
app.get("/api/posts/username", PostCont.getPostByUsername);
app.post("/api/post", PostCont.addPost);
app.delete("/api/post/:post_id", PostCont.deletePost);


app.listen(SERVER_PORT, () => console.log(`listening on ${SERVER_PORT}`));