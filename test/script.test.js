const googleSearch = require('./script');

dbMock = [
    'dog.com',
    'cheespuff.com',
    'disney.com',
    'dogpics.com'
]

describe('googleSearch',() => {

it('is a silly test test', () => {
    expect('hello').toBe('hello')
       
})


it('is searching google', () => {
    expect(googleSearch(dbMock,'testtest')).toEqual([])
    expect(googleSearch(dbMock,'dog')).toEqual(['dog.com','dogpics.com'])
       
})

it('works with undefined and null input', () => {
    expect(googleSearch(dbMock,undefined)).toEqual([])
    expect(googleSearch(dbMock,null)).toEqual([])
       
})


it('doesnt return more then three matches', () => {
    expect(googleSearch(dbMock,'.com').length).toEqual(3)

       
})

})
