//Neste arquivo realizamos a validacao dos dados, caso algum dado nao esteja dentro das 
//especificasoes que informamos abaixo ele dara um error e nao adicionara no banco de dados

import {body} from "express-validator"

//aqui criamos a uma funcao que iramos adicionar no POST no arquivo router.ts
export const movieCreateValidation = () => {
    return[
        body('title')
            .isString().withMessage('O titulo é obrigatorio')
            .isLength({min: 5}).withMessage("O titulo precisa no minimo de 5 caracteres"),
        body('rating')
            .isString().withMessage('Adicione uma avaliacao para o filme')
            .isIn(['ruim','boa','otima']).withMessage("avalie com ruim, boa ou otima"),
        body('description')
            .isString().withMessage('Adicione uma Descrisao ao filme')
            .isLength({min: 10, max: 100}).withMessage('A descriacao deve conter no minimo 10 caracteres e 100 o maximo'),
        body('director')
            .isString().withMessage('O filme deve ter no minimo um diretor'),
        body('poste')
            .isURL().withMessage('Adicione uma URL valida para o poste')
    ]
}