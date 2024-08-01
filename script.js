const quoteContainer = document.getElementById("quoteContainer");
const quoteText = document.getElementById('quote');
const authorText = document.getElementById ('author');
const twitterButton = document.getElementById ('twitter');
const cambiaQuote = document.getElementById ('cambiaQuote');
let apiQuotes = [];

// Show new quote
function newQuote(apiQuotes){
    // prende una citazione casuale dalle API array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    
    // controlla se l'autore c'è, in alternativa dice 'Unknown' 
    if (!quote.author){
        authorText.textContent = 'Unknown';
    } else {
        authorText.textContent = quote.author;
    }
    if (quote.text.length>120){
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    quoteText.textContent = quote.text;
}

// Get quotes from API
async function getQuotes(){
    const apiURL= "https://type.fit/api/quotes";
    try {
        const response = await fetch(apiURL);
        const apiQuotes = await response.json();
        newQuote(apiQuotes);
        
    } catch (error) {}
}

getQuotes();