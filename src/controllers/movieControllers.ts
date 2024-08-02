//neste arquivo criamosa funcao para realizar o create, delete, update 
//e realizar busca dos filmes no banco de dados

import { Request, Response } from "express";

//Model
import { MovieModel } from "../models/Movie";

//Logger
import Logger from "../../config/logger";
import { error } from "console";
import { title } from "process";


//POST Movie
//nesta funcao ela e responsavel de incerir um filme no banco de dados
// conforme o medelo de dados do MovieModel
export async function createMovie(req: Request, res: Response) {
    
    //caso os dados inceridos sejam compativeis ele 
    //ira realizar o codigo abaixo
    try{
        const data = req.body
        const movie = await MovieModel.create(data)
        return res.status(201).json(movie)
    }
    //caso os dados nao seje conpativel ou de algum 
    //erros ele ira realizar o codigo abaixo
    catch (e: any){
        Logger.error(`Erros na tentativa de insercao ${e.message}`)
    }
}


//GET Id
//Nesta funcao ela e responsalvel por realizar a bsuaca no bd 
//com a referencia pelo (id) do filme
export async function findMovieById (req: Request, res: Response){
    try{
        const id = req.params.id
        const movie = await MovieModel.findById(id);

        if (!movie){
            return res.status(404).json({error:"o filme nao existe"})
        }
        return res.status(200).json(movie)
    }
    catch (e: any){
        Logger.info(`Erro no sistema ${e.message}`)
    }
}


//GET Movies
//Nesta funcao ela e responsavel por realizar a busca de todos os filmes 
// que estao no banco de dados
export async function getAllMovie(req:Request, res:Response) {
    try{
        const movies = await MovieModel.find()
        return res.status(200).json(movies)
    }
    catch (e: any){
        Logger.info(`Erro no sistema ${e.message}`)
    }
}


//DELETE Movie
//Nesta funcao ela e responsalvel por deletar o filme pelo ID informado 
//na requisicao HTTP
export async function deleteMovie(req: Request, res:Response) {
    try{
        const id = req.params.id
        const movie = await MovieModel.findById(id)
        const title = movie?.title
        if (!movie){
           return res.status(404).json({error:'Filme nao encontrado'}),
                Logger.warn(`O filme nao foi encontrado!`)
        }
        Logger.info(`O filme ${title} foi deletado`)
        await MovieModel.findByIdAndDelete(movie)
        return res.status(202).json({message:`Filme ${title} deletado`})
    }
    catch (e:any){
        Logger.error(`Erro no sistema ${e.message}`)
    }
}


//PUT Movie
export async function updateMovie(req: Request, res:Response){
    try{
        const id = req.params.id
        const data= req.body
        const movie = await MovieModel.findById(id)
        if (!movie){
            return res.status(404).json("esse id nao existe")
        }
        await MovieModel.updateOne({_id: id}, data)
        return res.status(202).json(movie).json("FILME ATUALIZADOS"),
        Logger.info('Filme atualizado com sucesso')
    }
    catch (e:any) {
        Logger.info(`Erro no sistema ${e.message}`)
    }
}