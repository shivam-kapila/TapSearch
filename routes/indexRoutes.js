var express = require("express"),
    router = express.Router();
    
var input_text,
    docs = {},
    words = {},
    search_word_indices = [];

router.get("/",  (req, res) => {
    res.render('home');
});

router.get("/index", indexDocuments, indexWords, (req, res) => {
    res.render("indexedResult",{"inputText": input_text, "indexedDocuments":docs, "indexedWords": words});
})

router.get("/search", searchWord, (req, res) => {
    search_word = req.query.search_word;
    res.render("searchResult", { "inputText": input_text, "indexedDocuments": docs, "indexedWords": words, "searchWordIndices": search_word_indices, "searchWord": search_word });
})

router.get("/clear", (req, res) => {
    input_text = "";
    docs = {};
    words = {};
    res.redirect("/");
})

function indexDocuments(req, res, next){
    input_text = req.query.input_text;
    input_text = input_text.replace(/[^\w\s]|_/g, "")
    console.log(input_text)
    input_text_split = input_text.split("\r\n\r\n");
    i = 1;
    input_text_split.forEach((inp) =>{
        docs[i] = input_text_split[i-1];
        i++;
    })
    console.log("1")
    return next();
}

function indexWords(req, res, next){
    for (let current_doc_index  in docs){
        current_doc = docs[current_doc_index];
        current_doc_words = current_doc.split(" ");
        current_doc_words.forEach((current_word) => {
            current_word = current_word.toLowerCase();
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

function searchWord(req, res, next){
    search_word = req.query.search_word;
    search_word_indices = words[search_word];
    if(search_word_indices.length > 10){
        search_word_indices = search_word_indices.slice(0,10);
    }
    return next();
}

module.exports = router;
