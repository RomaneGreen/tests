const fetch = require('node-fetch')
const swapi = require('./script2')


it('call swapi to get people async', (done) => {
    expect.assertions(1)
   return swapi.getPeople(fetch).then(data => {
        expect(data.count).toEqual(87)
        done()
    })
})



it('call swapi to get people promises', () => {
    expect.assertions(2)
 return  swapi.getPeoplePromise(fetch).then(data => {
        expect(data.count).toEqual(87)
        expect(data.results.length).toBeGreaterThan(5)
    })
})