import request from 'supertest'
import {server, app} from '../../../src/index'
import sinon from 'sinon' 
import moviesActions from '../../../src/actions/movies/movies'

describe('GET /api/movies', () =>{

    beforeEach(() => {
        sinon.restore()
    })
    afterAll(()  => {
        server.close()
    })

    test('debe retornar un json vacio si no hya peliculas', async() => {
        sinon.stub(moviesActions, 'getAllMovies').returns(getMockMovies())
        const response = await request(app.callback()).get('/api/movies')
        expect(response.status).toBe(200)
        expect(response.body).toEqual([])
    })

    test('debe retornar un json con todas las peliculas si existen', async() => {
        const response = await request (app.callback()).get('/api/movies')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(moviesActions.getAllMovies())
    })
})


function getMockMovies () {
    return []
}