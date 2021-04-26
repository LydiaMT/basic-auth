'use strict';

const Users = require('../models/usersSchema');

// ==================== EXPRESS ==================== //
const express = require('express');
const userRouter = express.Router()

// ==================== 3RD PARTY DEPENDENCIES ==================== //
const bcrypt = require('bcrypt');
const base64 = require('base-64');

// ==================== ROUTE TO CREATE AN ACCOUNT ==================== //
userRouter.post('/signup', async (req, res) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 5);
    const user = new Users(req.body);
    const record = await user.save(req.body)
    res.status(200).json(record);
  } catch (error) { res.status(403).send("Error creating User"); }
});

// ==================== ROUTE TO LOGIN TO A CREATED ACCOUNT ==================== //
userRouter.post('/signin', async (req, res) => {
  let basicHeaderParts = req.headers.authorization.split(' ');
  let encodedString = basicHeaderParts.pop();
  let decodedString = base64.decode(encodedString);
  let [username, password] = decodedString.split(':');
  try {
    const user = await Users.findOne({ username: username});
    const valid = await bcrypt.compare(password, user.password);
    if(valid) {
      res.status(200).json(user);
      console.log("succes!")
    } else {
      throw new Error('Invalid User')
    } 
  } catch (error) { res.status(403).send("Invalid Login")}
});

module.exports = { userRouter };
