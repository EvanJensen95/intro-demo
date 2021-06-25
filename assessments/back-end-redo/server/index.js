const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get('/api/fortunes', function(req, res) { 

  const fortunes = [
    'A beautiful, smart, and loving person will be coming into your life',
    'A faithful friend is a strong defense',
    'A fresh start will put you on your way',
    'Courtesy begins in the home',
    'Don’t worry; prosperity will knock on your door soon',
    'Failure is the path of lease persistence',
    'In order to take, one must first give'
  ]

  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];

  res.status(200).send(randomFortune)

})

const sportsArr = ['baseball', 'basketball', 'football', 'hockey', 'soccer'];

app.get('/api/sports', function(req, res) {
  res.status(200).send(sportsArr);
})

app.post('/api/sports', function(req, res) {
  const{ newSport } = req.body;

  sportsArr.push(newSport);

  res.sendStatus(200);
})

app.get('/api/encouragingThings', function(req, res){
  const encouragingThings = [
    'you got this!',
    'you are doing amazing!',
    'you are da BOMB!',
    'you are the bees knees',
    'you are making this look like cake!'
  ]
  let randomIndex = Math.floor(Math.random() * encouragingThings.length);
  let randomThing= encouragingThings[randomIndex];

  res.status(200).send(randomThing)
  
})

app.listen(4000, () => console.log("Server running on 4000"));
