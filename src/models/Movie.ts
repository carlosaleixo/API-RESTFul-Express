import strict from "assert/strict"
import {model, Schema} from "mongoose"

const movieSchema = new Schema(
    {
       title: {type: String},
       rating: {type: String},
       description: {type: String},
       director:{type: String},
       actors: {type: Array},
       poster:{type: String} 
    },
    {
        timestamps: true
    }
)

export const MovieModel = model("Movie", movieSchema)