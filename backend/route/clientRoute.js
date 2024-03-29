const express = require("express")
const client = require("../controller/client")

const router = express.Router()

router.post("/create-client", client.createClient)
router.get("/get-clients", client.getClients)

module.exports= router
