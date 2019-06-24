
const googleDatabase = [
    'cats.com',
    'souprecipes.com',
    'flower.com',
    'animals.com',
    'catpics.com',
    'myfavcats.com',
    'myfavcats2.com'
]

const googleSearch = (db,searchInput) => {

    const matches = db.filter(website => {
        return website.includes(searchInput)
    })
   return matches.length > 3 ? matches.slice(0,3) : matches 
   console.log(matches)
}

console.log(googleSearch(googleDatabase,'animals'))

module.exports = googleSearch;