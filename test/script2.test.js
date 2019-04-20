const fetch = require('node-fetch')
const swapi = require('./script2')


it('call swapi to get peolpe', () => {
    swapi.getPeople(fetch).then(data => {
        expect(data.count).toEqual(87)
    })
})



it('call swapi to get peolpe', () => {
    swapi.getPeoplePromise(fetch).then(data => {
        expect(data.count).toEqual(87)
    })
})