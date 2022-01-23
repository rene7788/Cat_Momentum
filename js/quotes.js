const quotes = [
    {
        quote: "Cats are angels with fur.",
        author: "Sark"
    },
    {
        quote: "Until one has loved an animal, a part of one’s soul remains unawakened.",
        author: "Anatole France"
    },
    {
        quote: "Time spent with cats is never wasted.",
        author: "Sigmund Freud"
    },
    {
        quote: "The smallest feline is a masterpiece.",
        author: "Leonardo Da Vinci"
    },
    {
        quote: "People who don't like cats were probably mice in an earlier life.",
        author: "Unknown"
    },
    {
        quote: "The ideal of calm exists in a sitting cat.",
        author: "Jules Renard"
    },
    {
        quote: "The cat is above all things, a dramatist.",
        author: "Margaret Benson"
    },
    {
        quote: "Kittens are angels with whiskers.",
        author: "Alexis Flora Hope"
    },
    {
        quote: "There are few things in life more heartwarming than to be welcomed by a cat.",
        author: "Tay Hohoff"
    },
    {
        quote: "A meow massages the heart.",
        author: "Stuart Mcmillan"
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = `"${todaysQuote.quote}"`;
author.innerText = todaysQuote.author;