import request from 'supertest'
import {server, app} from '../../../src/index'
import sinon from 'sinon'
import moviesActions from '../../../src/actions/movies/movies'



describe('GET /api/movies/:name', () => {

    beforeEach(() => {
        sinon.restore()
    })
    afterAll(()  => {
        server.close()
    })

    test('Si no existen peliculas con el nombre devolvera una lista vacia', async () => {
        const response = await request(app.callback()).get('/api/movies/xdxd')
        expect(response.status).toBe(200)
        expect(response.body).toEqual([])//("No se han encontrado coincidencias")
    })
    
    test('Si existen coencidencias de nombre retorna lista de estas', async() => {
        const response = await request(app.callback()).get('/api/movies/2001')
        expect(response.status).toBe(200)
        expect(response.body).toEqual([
            {
                "Title": "2001: A Space Odyssey",
                "US Gross": 56700000,
                "Worldwide Gross": 68700000,
                "US DVD Sales": null,
                "Production Budget": 10500000,
                "Release Date": "Apr 02 1968",
                "MPAA Rating": null,
                "Running Time min": null,
                "Distributor": null,
                "Source": "Original Screenplay",
                "Major Genre": null,
                "Creative Type": "Science Fiction",
                "Director": "Stanley Kubrick",
                "Rotten Tomatoes Rating": 96,
                "IMDB Rating": 8.4,
                "IMDB Votes": 160342
            }
        ])
    })
})


