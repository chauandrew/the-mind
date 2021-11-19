const express = require('express')
const router = express.Router()

router.get("/test", (_, res) => {
    res.status(200)
    res.send("Hello World!")
})

module.exports = router;