const Spot = require('../models/Spot.js')
const User = require('../models/User.js')

module.exports = {
  index: (req, res) => {
    Spot.find({}, (err, spots) => {
      if (err) res.json({ success: false, err })
      res.json({ success: true, spots })
    })
  },

  create: (req, res) => {
    console.log(req.body)
    console.log('hit')
    Spot.create(req.body, (err, newSpot) => {
      if (err) res.json({ success: false, err })
      res.json({ success: true, newSpot })
      // push the users id into the created spots user array
      newSpot.user.push(req.user.id)

      // save the new Spot with the user's id
      newSpot.save(err => {
        // returns the Spot obj with current user's id in the spots users array
        // if it saves, push the Spot's id into the users favorites array
        // res.json({success: true, addedUserToSpot})

        User.findById(req.user.id, (err, user) => {
          console.log(newSpot)
          // what we want is to push newSpot spot_id so we can ping 4square API
          user.userspots.push(newSpot.spotId)
          user.save(err => {
            console.log('User added this Spot successfully.')
          })
        })
      })
    })
  },

  show: (req, res) => {
    // This is searching our DB for Spot by it's API Spot id
    Spot.find({ spotId: req.params.id }, (err, spot) => {
      if (err) res.json({ success: false, err })
      res.json({ success: true, spot })
    })
  },

  update: (req, res) => {
    let user_id = req.user.id
    let spotId = req.params.id
    Spot.find({ spotId: req.params.id }, (err, spot) => {
      let foundSpot = spot[0]
      if (err) res.json({ success: false, err })
      // Check if user has already liked this Spot (see if userId exists in Spot users' array)
      let foundUser = foundSpot.users.find(id => id == user_id)
      if (foundUser) {
        let index = foundSpot.users.indexOf(user_id)
        console.log(index)
        foundSpot.users.splice(index, 1)
        // Set logic to UNLIKE Spot
        // Remove user's ID from Spot's users array
        foundSpot.save(err => {
          if (err) res.json({ success: false, err })
          console.log('User has been removed from this Spot.')

          // Remove spotId from User's favorites array
          User.findById(user_id, (err, user) => {
            if (err) res.json({ success: false, err })
            let spotIndex = user.favorites.indexOf(spotId)
            console.log(spotIndex)
            user.favorites.splice(spotIndex, 1)
            user.save(err => {
              if (err) res.json({ success: false, err })
              console.log('Spot has been removed.')
            })
          })
        })

        // Push user's id into Spot users' array
      } else {
        // Add user_id to the Spot's users array
        foundSpot.users.push(user_id)

        // Save Spot with added user's id
        foundSpot.save(err => {
          // Find User's id
          User.findById(user_id, (err, user) => {
            // Check if the Spot id is in the user's favorites array
            let foundSpot = user.favorites.find(id => id == spotId)
            if (foundSpot) console.log('User already liked this Spot')
            // // Push Spot's id to user's favorites array
            else user.favorites.push(spotId)
            // Save user's favorites array with added Spot id
            user.save(err => {
              console.log({ message: `Spot added to user's favorites array successfully` })
            })
          })
        })
      }
    })
  },

  destroy: (req, res) => {
    Spot.findByIdAndRemove(req.params.id, (err, deletedSpot) => {
      if (err) res.json({ success: false, err })
      res.json({ success: true, deletedSpot })
    })
  }
}
