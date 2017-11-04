const express = require('express')
const next = require('next')

const dev = process.env.NOD_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()
// mapped a custom route to our existing page "/post" and mapped query params as well
// post.js but in the server route, we don't have that title because we only have an ID for the blog post in the URL. So, in that case, we set the ID as the server side query string param.

//This is a problem. But in the real world, this won't be much of an issue because we'll use an ID to fetch data from a data server in both client and the server.
//So, we only need an ID.

server.get('/p/:id', (req,res) => {
    const actualPage = '/post'
    const queryParams = { title: req.params.id }
    app.render(req, res, actualPage, queryParams)
  })

  server.get('*', (req, res) => {
    return handle(req, res) 
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})
