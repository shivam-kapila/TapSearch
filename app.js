var express = require("express"),
    ejs = require("ejs"),
    app = express()
    
    port = process.env.PORT || 3000
    ip = process.env.IP
    
    indexRoutes = require("./routes/indexRoutes");;


app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.use("/", indexRoutes);

app.listen(port, ip, () => {
    console.log("Port up at:", port);
});