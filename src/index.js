const express=require("express");
const cors=require("cors");
const productcontroller=require("./controller/product.controller");
const skincarecontroller=require("./controller/skincare.controller")
const cartcontroller=require("./controller/cart.controller");
const usersController = require("./controller/user.controller");
const {register,login}=require("./controller/auth.controller")
 const app=express();
 app.use(cors());
 app.use(express.json());
 app.use("/users", usersController); 

app.post("/register",register)
app.post("/login",login)
app.use("/carts",cartcontroller);
 app.use("/products",productcontroller);
 app.use("/skincares",skincarecontroller);
 module.exports=app;