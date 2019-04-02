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
1) state not updating fast enough... getting the previous state in the console but not on the display.
2) rollScore not working - variable not accessible
3) What's the actual game play here? I don't get it, I'm using the international scoring.
I should just lose the keypad and randomize the number ...
4) line 14 of scoreDisplay.jsx conditional is backwards but it works
5) frame and roll count no longer stopping at 10 && 2  - / fix

TODO
1) Fix errors
2) Write jest ? tests to check scoring is implimented correctly
3) Add routes to save result in Mongo
4) Add a scoreboard view with last 30 games from mongo


db.score.insert({
   score: 87,
   date: {dateCreated: new Date()}
})
db.counters.insert({
  "game_id":"gameid",
  "sequence_value": 0
})
*/