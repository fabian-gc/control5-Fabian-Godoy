import moviesController from '../../actions/movies/movies'
import { getOKResponse, getErrorResponse, getOKEmptyResponse} from '../../utils/responseBuilder'

exports.GETMoviesByName = (ctx) => {
    const moviesList = moviesController.getMoviesByName(ctx.params.name)
    if (moviesList.length != 0){
        if (moviesList) ctx = getOKResponse(ctx, moviesList) 
        else ctx = getErrorResponse(ctx)
    }
    else{
        if(moviesList) ctx =getOKEmptyResponse(ctx)
        else ctx = getErrorResponse(ctx)
    }
    
    return ctx
}