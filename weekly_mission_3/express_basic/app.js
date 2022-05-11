// Usando objeto express
const express = require('express')
// Add de express
const app = express()
// Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

// path inicial, responderá a la url localhost:3000
app.get('/', (req, res) => {
    res.send("Hello World!")
})

// Respondiendo texto
// localhost:3000launchx
app.get('/launchx', (req, res) => {
    res.send("Bienvenidos a launchx")
})

// Respondiendo texto
// localhost:3000/explorersInNode
app.get('/explorersInNode', (req, res) => {
    const explorer = {name: "Explorer", msg: "Hello"}
    res.send(explorer)
})

// Query Params: Recibir parámetros por la url
// http://localhost:3000/explorer/ismael
// req.params = {"explorerName":"ismael"}
app.get('/explorers/:soyElExplorerIsmael', (req, res) => {
    res.send(req.params)
})

// Con esto inicalizamos esta app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})