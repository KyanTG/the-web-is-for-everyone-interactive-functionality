// Importeer het npm package Express (uit de door npm aangemaakte node_modules map)
// Deze package is geïnstalleerd via `npm install`, en staat als 'dependency' in package.json
import express, { text } from 'express'

// Importeer de Liquid package (ook als dependency via npm geïnstalleerd)
import { Liquid } from 'liquidjs';

// const Algemeen = await fetch ('https://fdnd-agency.directus.app/items/mh_shows?fields=*.*.*.*')
const Radio = await fetch('https://fdnd-agency.directus.app/items/mh_radiostations')

const RadioJSON = await Radio.json()

// console.log(RadioJSON)

// Maak een nieuwe Express applicatie aan, waarin we de server configureren
const app = express()

// Gebruik de map 'public' voor statische bestanden (resources zoals CSS, JavaScript, afbeeldingen en fonts)
// Bestanden in deze map kunnen dus door de browser gebruikt worden
app.use(express.static('public'))

// Stel Liquid in als 'view engine'
const engine = new Liquid();
app.engine('liquid', engine.express()); 

// Stel de map met Liquid templates in
// Let op: de browser kan deze bestanden niet rechtstreeks laden (zoals voorheen met HTML bestanden)
app.set('views', './views')


// Maak werken met data uit formulieren iets prettiger
app.use(express.urlencoded({extended: true}))



// veronica page of homepage
app.get('/veronica', async function (request, response) {

  const algemeenVeronica = await fetch('https://fdnd-agency.directus.app/items/mh_shows?fields=id,from,until,show.id,show.name,show.body,show.radiostation.name,show.users.mh_users_id.full_name,show.users.mh_users_id.cover&filter={%22show%22:{%22radiostation%22:{%22name%22:%22Radio%20Veronica%22}}}&')
  const algemeenVeronicaJSON = await algemeenVeronica.json()

  const radioStations = await fetch('https://fdnd-agency.directus.app/items/mh_radiostations')
  const radioStationsJSON = await radioStations.json()

  response.render('veronica.liquid', {algemeen: algemeenVeronicaJSON.data, radio:radioStationsJSON} )
})


// likes page veronica
app.get('/veronica/likes', async function (request, response) {

  const likedShows = await fetch('https://fdnd-agency.directus.app/items/mh_accounts/7?fields=id,name,liked_shows.mh_show_id.*.*.*')
  const likedShowsJSON = await likedShows.json()
  
response.render('veronica-likes.liquid', {algemeen: likedShowsJSON.data} )  // hierdoor geef je de opgevraagde data mee in de naam algemeen
})

// data & likes post
app.post('/veronica', async function (request, response) {

  //console.log(request.body) dit is om te checken of het werkt

  const testConsole = await fetch('https://fdnd-agency.directus.app/items/mh_accounts_shows', {
    method: 'POST',                       // hierdoor worden nieuwe likes met nieuwe ids toegevoegd
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    body: JSON.stringify({
      mh_accounts_id: 7,                  // dit is mijn account id
      mh_show_id: request.body.showid     // id opvragen van de body vanuit de data van de shows
     }),
  })
    // console.log(testConsole)
    response.redirect(303, '/veronica' )  // hierdoor word je teruggestuurd naar de homepage nadat je geliked hebt
})

// app.post('/veronica/likes', async function (request, response) {

//   const deleteLike = await fetch('https://fdnd-agency.directus.app/items/mh_accounts/1?fields=id,name,liked_shows.mh_show_id.id', {
//     method: 'DELETE',         
//     headers: {
//       'Content-Type': 'application/json;charset=UTF-8'
//     },
//   })

//   response.redirect(303, '/veronica/likes' )  // hierdoor word je teruggestuurd naar de likes page nadat je een like hebt verwijderd
// })



// pagina als de gekozen pagina niet werkt
app.use((req, res, next) => {
  res.status(404).render('notfound.liquid'); // custom error page
})
  

app.post('/', async function (request, response) {
  response.redirect(303, '/')
})
 

// Stel het poortnummer in waar Express op moet gaan luisteren
// Lokaal is dit poort 8000, als dit ergens gehost wordt, is het waarschijnlijk poort 80
app.set('port', process.env.PORT || 8000)

// Start Express op, haal daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
})