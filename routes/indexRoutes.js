var express = require("express"),
    router = express.Router();
    
var input_text,
    docs = {},
    words = {};

router.get("/",  (req, res) => {
    res.render('home');
});

router.get("/index", indexDocuments, indexWords, (req, res) => {
    res.send({"indexedDocuments":docs, "indexedWords": words});
})

function indexDocuments(req, res, next){
    input_text = req.query.input_text;
    input_text_split = input_text.split("\r\n\r\n");
    i = 0;
    input_text_split.forEach((inp) =>{
        docs[i] = input_text_split[i];
        i++;
    })
    console.log(docs[2])
    return next();
}

function indexWords(req, res, next){
    // console.log(docs)
    for (let current_doc_index  in docs){
        current_doc = docs[current_doc_index];
        // console.log(current_doc)
        current_doc_words = current_doc.split(" ");
        current_doc_words.forEach((current_word) => {
            doc_indices = []
            if (!(current_word in words)) {
                words[current_word]= [];
            }
            if (words[current_word].indexOf(current_doc_index) == -1){
                words[current_word].push(current_doc_index);
            }
        });
    }
    // console.log(words)
    return next();
}

module.exports = router;
