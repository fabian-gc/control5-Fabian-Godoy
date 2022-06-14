import request from 'supertest'
import {server, app} from '../../../src/index'
import sinon from 'sinon' 
import moviesActions from '../../../src/actions/movies/movies'

describe('GET /api/movies/rating/:classifier/:order', () => {

    beforeEach(() => {
        sinon.restore()
    })
    afterAll(()  => {
        server.close()
    })

    test('devolver la lista ordenanda segun IMDB ascendentemente', async() => {
        const response = await request(app.callback()).get('/api/movies/rating/imdb/asc')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(moviesActions.getMoviesByClassifier('imdb','asc'))
    })

    test('devolver la lista ordenanda segun IMDB decendentemente', async() => {
        const response = await request(app.callback()).get('/api/movies/rating/imdb/desc')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(moviesActions.getMoviesByClassifier('imdb','desc'))
    })

    test('devolver la lista ordenanda segun Rotten ascendentemente', async() => {
        const response = await request(app.callback()).get('/api/movies/rating/rotten/asc')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(moviesActions.getMoviesByClassifier('rotten','asc'))
    })

    test('devolver la lista ordenanda segun Rotten decendentemente', async() => {
        const response = await request(app.callback()).get('/api/movies/rating/rotten/desc')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(moviesActions.getMoviesByClassifier('rotten','desc'))
    })
    
    test('devolver mensaje de error por clasificacion erronea', async() => {
        const response = await request(app.callback()).get('/api/movies/rating/youtube/asc')
        expect(response.status).toBe(500)
        expect(response.body).toEqual({"message": "Hubo un error al mostrar toda la lista", "status": 500})
    })

    test('devolver mensaje de error por orden erroneo', async() => {
        const response = await request(app.callback()).get('/api/movies/rating/rotten/mix')
        expect(response.status).toBe(500)
        expect(response.body).toEqual({"message": "Hubo un error al mostrar toda la lista", "status": 500})
    })
})