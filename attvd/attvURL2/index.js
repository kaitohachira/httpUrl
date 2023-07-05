const url = require('url')
const address = 'http://api.example.com/data?param1=value1&param2=value2'


const parseUrl = new url.URL(address)
console.log(parseUrl.host)
console.log(parseUrl.pathnema)
console.log(parseUrl.search)
console.log(parseUrl.searchParams)
console.log(parseUrl.hash)