require("dotenv").config()
const fs = require("fs")

const db = require("./connect")
const sql = fs.readFileSync("./server/db/diary.sql").toString()

db.query(sql)
    .then(data => {
        db.end()
        console.log("set up complete")
    })
    .catch(error => console.log(error))