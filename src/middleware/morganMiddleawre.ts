import morgan, {StreamOptions} from "morgan";
import config from 'config';
import Logger from "../../config/logger";

//Neste codigo ele pegara qualque menssagem HTTP e tratara pela 
//funcao abaixo usando tambem o objeto Logger para realaizar o tratamento
const stream: StreamOptions = {
    write: (message) => Logger.http(message)
}

//neste codigo ele analiza se o ambiete esta de producao ou desenvolvimento
//caso esteja em prucao ela sera pulada, caso contario sera executada
//isso serve para que haja mesnos processamento em caso de producao
const skip = () => {
    const env = config.get<string>('env') || "development"
    return env !== 'development'
}
//Neste codigo ele é configurado para registrar informacoes detalhadas sobre as requisicoes HTTP
//as menssagen sao enviadas para Logger.http exeto quando estiverem em ambiente de producao
const morganMiddleware = morgan(
    "method :url :status :res[content-length] - :response-time ms",
    {stream, skip}
)

//Exportando a funcao morganMiddleware
export default morganMiddleware