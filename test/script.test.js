const googleSearch = require('./script');

dbMock = [
    'dog.com',
    'cheespuff.com',
    'disney.com',
    'dogpics.com'
]


it('is a silly test test', () => {
    expect('hello').toBe('hello')
       
})


it('is searching google', () => {
    expect(googleSearch(dbMock,'testtest')).toEqual([])
       
})