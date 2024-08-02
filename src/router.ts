//Neste arquivo iremos colocar as rotas do nosso projeto
import { Router, Request, Response } from "express";
import { createMovie, deleteMovie, findMovieById, getAllMovie, updateMovie } from "./controllers/movieControllers";
import { movieCreateValidation } from "./middleware/movieValidation";
//validations
import { validate } from "./middleware/handleValidation";

const router = Router()

export default router
    .get("/test", (req: Request, res: Response) => {
        res.status(200).send("API Working!")
})
   .post("/movie", movieCreateValidation(), validate, createMovie) 
   .get("/movie/:id", findMovieById)
   .get("/movies", getAllMovie)
   .delete("/movieDel/:id", deleteMovie)
   .patch("/movieUp/:id", updateMovie)