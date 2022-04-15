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

app.get("/api/fortune", (req, res) => {
  const fortunes = [`Not all those who wander are lost. - Bilbo Baggins`,
                    `Even the smallest person can change the course of the future. - Lady Galadriel`,
                    `It's the job that's never started takes longest to finish. - Sam Gamgee`, 
                    `Your time will come. You will face the same Evil, and yo will defeate it. - Lady Arwen` ,
                    `Do not be so quick to deal out death and judgment. Even the very wise do not see all ends. -Gandalf`]

  let randomIndex = Math.floor(Math.random() * fortunes.length)
  let randomFortune = fortunes[randomIndex]

  res.status(200).send(randomFortune)
})


const {getMovies, deleteMovie, createMovie, updateMovie} = require('./controller.js')

app.get(`/api/movies`, getMovies)
app.delete(`/api/movies/:id`, deleteMovie)
app.post(`/api/movies`, createMovie)
app.put(`/api/movies/:id`, updateMovie)


app.listen(4000, () => console.log("Server running on 4000"));
