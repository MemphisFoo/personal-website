var quotes = [
    '"If you can dodge a wrench, you can dodge a ball." - Patches O\'Houlihan',
    `"When I was a kid, when I was a little boy, I always wanted to be a dinosaur. I wanted to be a Tyrannosaurus Rex more than anything in the world. I made my arms short and I roamed the backyard, I chased the neighborhood cats, I growled and I roared. Everybody knew me and was afraid of me. And one day my dad said, "Bobby, you are 17. It's time to throw childish things aside," and I said, "Okay, Pop." But he didn't really say that, he said, "Stop being a f***ing dinosaur and get a job."
    - Dr. Robert Doback`,
    '"Ma! The meatloaf!!" - Chazz Reinhold',
    '"You miss 100% of the shots you don\'t take. - Wayne Gretzky." - Michael Scott',
    '"Identity theft is a real crime!" - Dwight Schrute',
    '"It\'s the history of the Totnum" - Giorgio Chiellini',
    '"My money don\'t jiggle jiggle, it folds" - Louis Theroux',
    '"It\'s <a href = url "https://www.facebook.com/Arsenal/videos/reyes-rocket-against-middlesbrough/10155287626067713/"> REYEEEESS!!!</a>." - Martin Tyler',
    '"That\'s one of the great things about music. You can sing a song to 85,000 people and they\'ll sing it back for 85,000 different reasons." - Dave Grohl',
    '"Trick question. Lemmy IS God". - Rex',
    '"I play real sports, not trying to be the best at exercising." - Kenny Powers',
    '“Oh wait, next weeks no good for me, the Jonas brothers are in town.” - Alan',
    '"I like to think of Jesus like, with giant eagles\' wings and singin\' lead vocals for Lynyrd Skynyrd with like an Angel Band, and I\'m in the front row, and I\'m hammered drunk." - Cal Naughton Jr.',
    '"We built DIFFERENT." - Lebron James',
    '“Resentment is like drinking poison and then hoping it will kill your enemies.” - Nelson Mandela',
    '"We\'ll do it live!" - Bill o\'Reilly',
]

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('showQuote').innerHTML = quotes[randomNumber];
}
