var quotes = [
    '"If you can dodge a wrench, you can dodge a ball." - Patches O\'Houlihan, <em>Dodgeball</em>',
    `"When I was a kid, when I was a little boy, I always wanted to be a dinosaur. I wanted to be a Tyrannosaurus Rex more than anything in the world. I made my arms short and I roamed the backyard, I chased the neighborhood cats, I growled and I roared. Everybody knew me and was afraid of me. And one day my dad said, 'Bobby, you are 17. It\'s time to throw childish things aside,' and I said, 'Okay, Pop.' But he didn't really say that, he said, 'Stop being a f***ing dinosaur and get a job.'"
    - Dr. Robert Doback, <em>Step Brothers</em>`,
    '"Ma! The meatloaf!!" - Chazz Reinhold, <em>Wedding Crashers</em>',
    '"You miss 100% of the shots you don\'t take. - Wayne Gretzky." - Michael Scott, <em>The Office</em>',
    '"Identity theft is a real crime!" - Dwight Schrute, <em>The Office</em>',
    '"It\'s the history of the Totnum" - Giorgio Chiellini, <em>Juventus vs. Tottenham Hotspur</em>',
    '"My money don\'t jiggle jiggle, it folds" - Louis Theroux',
    '"It\'s <a href="https://youtube.com/clip/Ugkxwj06_bq6oPEcEKDcsaZzE-9YRNLGy8sP"> REYEEEESS!!!</a>" - Martin Tyler, <em>Arsenal vs Middlesbrough, 2004 </em>',
    '"That\'s one of the great things about music. You can sing a song to 85,000 people and they\'ll sing it back for 85,000 different reasons." - Dave Grohl',
    '"Trick question. Lemmy IS God". - Rex, <em>Airheads</em>',
    '"I play real sports, not trying to be the best at exercising." - Kenny Powers, <em>Eastbound and Down</em>',
    '“Oh wait, next weeks no good for me, the Jonas brothers are in town.” - Alan, <em>The Hangover</em>',
    '"I like to think of Jesus like, with giant eagles\' wings and singin\' lead vocals for Lynyrd Skynyrd with like an Angel Band, and I\'m in the front row, and I\'m hammered drunk." - Cal Naughton Jr., <em>Talladega Nights</em>',
    '"We built DIFFERENT." - Lebron James, <em> 2020 Playoff bubble</em>',
    '“Resentment is like drinking poison and then hoping it will kill your enemies.” - Nelson Mandela',
    '"We\'ll do it live!" - Bill o\'Reilly, <em>Entertainment Tonight</em>',
    '"Kim, there\'s people that are <a href="https://youtube.com/clip/UgkxbD8cRHWPuIa4GEZ9pCG3h5RpxCwdSOlJ"> dying</a>." - Kourtney Kardashian, <em>KUWTK</em>',
]
var quoteButton = document.getElementById('quotBtn');
var generate = document.getElementById('quoteDisplay');
    
quoteButton.addEventListener('click', () => {
    if(quotes.length) {
        
        let random = Math.floor(Math.random() * quotes.length);
        generate.innerHTML = quotes[random];
        quotes.splice(random, 1);
        
    } else {
        generate.innerHTML = "No more quotes!";
    }
})