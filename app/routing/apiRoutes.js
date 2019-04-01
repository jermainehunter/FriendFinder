//Do I even need the const path?
const path = require("path");

const friends = require("../data/friends");

module.exports = (app) => {

    app.get('/api/friends', (req, res) => {
        console.log("This is API Friends");
        res.json(friends);
    });

    app.post("/api/friends", (req, res) => {
        console.log('routes works');

        //set up variables for finding match
        var newFriend = req.body;
        var myValues = newFriend.scores;
        var total = 0;
        var closestMatch = 750;
        var index = -1;
        console.log(myValues);
       
        friends.push(newFriend);
         //Iterate through the whole list of friends already in database
        // Will loop 6 times becuase of friends length
        //or will loop through however many friends objects we have
        for (let i = 0; i < friends.length; i++) {

            // toal is the combined idfference of each friend
            total = 0;

            // This loops through friends scores
            for (let j = 0; j < myValues.length; j++) {
                //for each friend calculate the total value
                //Math.abs method will give us the absolute value
                var diff = Math.abs(myValues[j] - friends[i].scores[j]);
                total += diff;
            }

            // 13 15 18 14 12 11 16
            console.log(total);

          
            // Determines lowest total
            if (total < closestMatch) {
                closestMatch = total;
                index = i;
                // working with right data
                console.log('Closet Match ' + closestMatch);

            }
        }

          console.log(friends)

        console.log('Closest Match:', friends[index]);
        res.send(friends)
        // res.json(friends[index]);
    });

   
};
