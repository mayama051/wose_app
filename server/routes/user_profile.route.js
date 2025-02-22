const express = require('express');
const app = express();
const user_profileRoute = express.Router();
const User_profileModel = require('../model/User_profile');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { unescapeLeadingUnderscores } = require('typescript');
//const authorize = require('../middlewares/auth')
//const { check, validationResult } = require('express-validator')

//get user
user_profileRoute.route('/').get((req, res) => {
    User_profileModel.find((error, user) => {
    if (error) {
      return next(error)
    } else {
      res.json(user)
      console.log('Users retrieved!')
    }
  })
});

//sign-up + create
user_profileRoute.route('/create-user').post((req, res, next) => {
    User_profileModel.create(req.body, (err, user) => {
    if (err) {
      return next(err)
    } else {
      res.json(user)
      console.log('User created!')
    }
  })
});

user_profileRoute.route('/add-intake').post((req, res) => {
  User_profileModel.updateOne({'_id': req.body.userId}, {$inc: {'intake': req.body.intake}}, (error, data) => {
    if (!error) {
      console.log('User intake updated succeed:', JSON.stringify(data))
      res.status(200).json(data);
    } else {
      console.error(error);
      res.status(500);
    }
  })
})

user_profileRoute.route('/clear-intake').post((req, res) => {
  User_profileModel.updateOne({'_id': req.body.userId}, {$inc: {'intake': req.body.intake}}, (error, data) => {
    if (!error) {
      console.log(`${req.body.intake}`)
      console.log('User intake clear succeed:', JSON.stringify(data))
      res.status(200).json(data);
    } else {
      console.error(error);
      res.status(500);
    }
  })
})

// Sign-in
user_profileRoute.route('/signin').post((req, res, next) => {
  let getUser;
  var email = req.body.email;
  User_profileModel.findOne({ email })
    .then((user) => {
      console.log(`[Login email]:${email}`)
      if (!user) {
        return res.status(401).json({
          message: 'Authentication failed',
        })
      }
      getUser = user
      var password_1 = req.body.password;
      var password_2 = user.password;
      // return bcrypt.compare(req.body.password, user.password)
      var match = bcrypt.compareSync(password_1, password_2);
      console.log(`[sign-in]: ${password_1 == password_2}`)
      return password_1 == password_2;
    })
    .then((response) => {
      console.log(`${response}`)
      if (!response) {
        return res.status(401).json({
          message: 'Authentication failed(!response)',
        })
      }
      let jwtToken = jwt.sign({ email: getUser.email, userId: getUser._id},
        'longer-secret-is-better', { expiresIn: '1h'})
      res.status(200).json({ token: jwtToken, expiresIn: 3600, _id: getUser._id,})
    })
    .catch((err) => {
      return res.status(401).json({
        message: `${err}`,
      })
    })
})

//get user by id
user_profileRoute.route('/fetch-user/:id').get((req, res) => {
  User_profileModel.findById(req.params.id, (err, user) => {
    if (err) {
      return next(err)
    } else {
      res.json(user)
      console.log('User fetch!')
    }
  })
});

module.exports = user_profileRoute;
