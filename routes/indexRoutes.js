var express = require("express"),
    router = express.Router();
    
var input_text,
    docs = new Map();

router.get("/",  (req, res) => {
    res.render('home');
});

router.get("/index", indexDocuments, (req, res) => {
    res.render('home');
});

function indexDocuments(req, res, next){
    input_text = req.query.input_text.split("\r\n\r\n");
    i = 0;
    input_text.forEach((inp) =>{
        docs.set(i, input_text[i]);
        i++;
    })
    console.log(docs)
    return next();
}

module.exports = router;
