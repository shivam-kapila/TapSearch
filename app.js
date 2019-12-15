var express = require("express"),
    ejs = require("ejs"),
    app = express()
    
    port = process.env.PORT || 3000
    ip = process.env.IP;


app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

console.log(process.env.PORT);

app.listen(port, ip, () => {
    console.log("Port up at: ", port);
});