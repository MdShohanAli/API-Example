const loadQuost = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuost(data))
}

const displayQuost = quote => {
    const quoteElement = document.getElementById('quote');
    quoteElement.innerText = quote.quote;
}