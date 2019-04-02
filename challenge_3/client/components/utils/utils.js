/*

Track which frame
which roll
Total number of points left in frame
total number of possible points left in game

can only roll 2x in one frame / if you don’t knock all down it’s a new frame anyhow

Strike - all 10 - 30 points
spare 10 - points plus the rest of the pins you knocked down if clear frame on 2nd bowl
1 point per pin if otherwise

ISSUES
1) app only sends data to db on 2nd click after end of game
2) sometimes game does not stop
3) need to account for only having a certain amount of numbers left...

TODO
1) Fix error
2) Write jest ? tests to check scoring is implimented correctly
3) Add routes to save result in Mongo
4) Add a scoreboard view with last 30 games from mongo
5) pinsLeftThisFrame not updating correctly.


db.score.insert({
   score: 87,
   date: {dateCreated: new Date()}
})
db.counters.insert({
  "game_id":"gameid",
  "sequence_value": 0
})
*/