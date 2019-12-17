var express = require("express"),
    ejs = require("ejs"),
    app = express()
    
    port = process.env.PORT || 3000
    ip = process.env.IP
    
    renderRoutes = require("./routes/renderRoutes");;
    apiRoutes = require("./routes/apiRoutes");;


app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.use("/", renderRoutes);
app.use("/api", apiRoutes);

app.listen(port, ip, () => {
    console.log("Port up at:", port);
});