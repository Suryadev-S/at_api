const express = require("express");
const routes = require("./routes/routes");
const app = express();

//app.use(express.static(path.join(__dirname,"views")))
//app.use(express.urlencoded({extended: false}))
app.use(routes)


app.listen(3000 || process.env.PORT,()=>{
    console.log("port connected");
})