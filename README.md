# TapSearch
A search application, similar to ElasticSearch built-in Javascript. It takes in multiple paragraphs of text, assigns a unique ID To each paragraph and stores the words to paragraph mappings on an inverted index.

  

# Getting Started
To run the project on your local machine, go through the following steps:  

**1. Verify that node-js and npm are installed in your system. For Ubuntu use the following command:**  
```
sudo apt-get install nodejs
```  

**2. Clone the project using the command:**  
```
git clone https://github.com/shivam-kapila/TapSearch
```  

**3. Open the project directory in terminal and run the following command:**  
```
node app.js
```  

**4. Open the following localhost link in any browser window:** [http://localhost:3000/](https://localhost:3000/ "TapSearch") 


**5. Enter the required inputs for inverted indexing the documents and search for the required word after that.** 

  

# APIs

Tap Search has the following APIs:

**1. clear (```/api/clear```)** - Clear the index and all indexed documents.

**2. index (```/api/index```)** - Index a given document (After having split the input into paragraphs a.k.a documents)

**3. search (```/api/search```)** - Given a word, search for it and retrieve the top 10 paragraphs (Documents) that contain it. (```/index``` needs to be called before ```/search```).
