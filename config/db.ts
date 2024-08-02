//Neste arquivo estamos realizando a coneccao do banco de dados
import mongoose from "mongoose";
import config from "config"
import Logger from "./logger";

async function connect(){
    const dbUri = config.get<string>('dbUri')

    //Fazendo o tratamento de erros
    try{
        //caso seja realizado a coneccao ao banco
        await mongoose.connect(dbUri)
        Logger.info("Coneccao realizada ao BD com secesso");
        //caso nao seje realizada a coneccao ao banco
    } catch (e){
        Logger.warn('Nao foi possivel conectar!');
        Logger.error(`Erro ${e}`);
        process.exit(1)
        //em casso de erro a aplicacao sera interrompida
    }
}

//se nao colocarmos esse codigo abaixo
//nao iremos conseguir exporta a funcao "connect()"
export default connect;