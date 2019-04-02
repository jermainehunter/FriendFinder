



app.post("/api/friends", (req, res) => {
        let userInfo = req.body;
        let userScores = userInfo.scores
        let matchName = '';
        let matchImage = '';
        let currentDifference = 10000;
        // This will loop through all of our firends
        for (var i = 0; i <friendsData.length; i++) {
            let diff = 0;
            // Loop through all of the user's choices and compare vs friend data
            for (var j = 0; j < userScores.length; j++) {
                diff += (Math.abs(friendsData[i].scores[j] - userScores[j]));
            };
            if (diff < currentDifference) {
				currentDifference = diff;
				matchName = friendsData[i].name;
				matchImage = friendsData[i].photo;
            }

        }

        friendsData.push(userInfo);
        res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
    });