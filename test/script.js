
const googleDatabase = [
    'cats.com',
    'souprecipes.com',
    'flower.com',
    'animals.com',
    'catpics.com',
    'myfavcats.com'
]

const googleSearch = (searchInput) => {

    const matches = googleDatabase.filter(website => {
        return website.includes('searchInput')
    })
    return matches.length > 3 ? matches.slice(0,3) : matches 
}