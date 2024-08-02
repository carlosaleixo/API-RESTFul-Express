//.env variables
require("dotenv").config();

import  express  from "express";
import  config  from "config";
//DataBase
import db from "../config/db"
//Routes
import router from "./router";
//Logger
import Logger from "../config/logger";

//morganMiddleware
import morganMiddleware from "./middleware/morganMiddleawre";

//app port
const port = config.get<number>("port")

//renomendo a funcao express para app
const app = express()

//JSON middleware
app.use(express.json())

//Morgan
app.use(morganMiddleware)

app.use("/api/", router)


app.listen(port, async() =>{
    await db();
    Logger.info(`Aplicacao esta funcionando na porta: ${port}`);
    
})