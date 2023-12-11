var quotesArr = [
    "\“So many books, so little time.\”<br> <br> ― Frank Zappa",
    "\“A room without books is like a body without a soul.\” <br> <br> ― Marcus Tullius Cicero    ",
    "\“Be the change that you wish to see in the world.\” <br> <br> ― Mahatma Gandhi",
    "\“Live as if you were to die tomorrow. Learn as if you were to live forever.\” <br> <br> ― Mahatma Gandhi",
    "\“Insanity is doing the same thing, over and over again, but expecting different results.\”<br> <br> ― Narcotics Anonymous",
    "\“Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover\“ <br> <br>― H. Jackson Brown Jr., P.S. I Love You",
    "\“Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring.\” <br> <br> ― Marilyn Monroe",
    "\“I have not failed. I've just found 10,000 ways that won't work.\”<br> <br> ― Thomas A. Edison",
    "\“I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.\” <br> <br> ― Albert Einstein",
    "\“You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. You're on your own. And you know what you know. And YOU are the one who'll decide where to go...\”<br> <br> ― Dr. Seuss, Oh, the Places You'll Go!",
]

var quoteButton = document.getElementById("quote");
var box = document.getElementById("box");
var quoteShow = document.getElementById("quote-show");                      // Paragraph
var prevQuote;                                                              // To save the previous quote index
var newQuote;                                                               // To get random quote from the array > quotesArr

function show() {
    box.classList.add("dissappear");                                        //Make the boxx dissappear
    newQuote = quotesArr[Math.floor(Math.random() * 10)];

    // change the array[i] if it's equal the previous value
    while (newQuote == prevQuote) {
        newQuote = quotesArr[Math.floor(Math.random() * 10)];
    }

    setTimeout(function () { quoteShow.innerHTML = newQuote }, 900)         //Add quote to text area after box dissappearing
    prevQuote = newQuote;
    setTimeout(function () { box.classList.remove("dissappear") }, 1000)    //Box show
}


