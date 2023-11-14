const connection = require('../config/connection');
const { Thought, User } = require('../models');
const { getRandomids, getRandomUsername, getRandomEmail, getRandomBodytext } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
    let thoughtCheck = await connection.db.listCollections({ name: 'thought' }).toArray();
    if (thoughtCheck.length) {
      await connection.dropCollection('thought');
    }

    let userCheck = await connection.db.listCollections({ name: 'user' }).toArray();
    if (userCheck.length) {
      await connection.dropCollection('user');
    }

    const user = [];

    for(let i = 0; i < 3; i++){
        let thoughts = []
        for(let i = 0; i < 2; i++){
            let thoughtID = getRandomids()
            thoughts.push(thoughtID)
        }
        
        let friends = []
        for(let i = 0; i < 2; i++){
            let friendsID = getRandomids()
            friends.push(friendsID)
        }

        let username = `${Math.floor(Math.random() * (100))}` + getRandomUsername();

        let email = `${Math.floor(Math.random() * (100))}` + getRandomEmail();

        user.push({
            username,
            email,
            thoughts,
            friends,
        })
    }

    await User.collection.insertMany(user);

    const thought = []; 

    for(let i = 0; i < 3; i++){
        let thoughtText = getRandomBodytext();
        let username = `${Math.floor(Math.random() * (100))}` + getRandomUsername();
        let reactions = []
        for(let i = 0; i < 2; i++){
            let reaction = getRandomBodytext()
            let username = `${Math.floor(Math.random() * (100))}` + getRandomUsername()
            reactions.push({
                reaction,
                username,
            })
        }

        thought.push({
            thoughtText,
            username,
            reactions,
        })
    }

    await Thought.collection.insertMany(thought)
});