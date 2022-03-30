import crypto from 'crypto';
import { v4 as uuidv4 } from 'uuid';
import dbConnect from '../lib/dbConnect';
import User from '../models/User';


const users = User;
// console.log(users)

export async function createUser({ email, password }) {
  const salt = crypto.randomBytes(16).toString('hex')
  const hash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, 'sha512')
    .toString('hex')
  const user = {
    id: uuidv4(),
    createdAt: Date.now(),
    email,
    hash,
    salt
  }
  await dbConnect();

  var userDetails = new users(user);
  userDetails.save((err, doc) => {
    if (!err) {
      console.log("User added");
    }else {
      console.log(err);
    }
  })

  // users.insertOne(user)

  return userDetails
}

// Here you should lookup for the user in your DB
export async function findUser(email) {
  await dbConnect();

  let val = await users.findOne({email: email}).then(val => {return val});
  return val;
}

// Compare the password of an already fetched user (using `findUser`) and compare the
// password for a potential match
export async function validatePassword(user, inputPassword) {
  // console.log(user, '\n\n\n', inputPassword);
  const salt = user.salt;
  // const hash = crypto
  //   .pbkdf2Sync(password, salt, 1000, 64, 'sha512')
  //   .toString('hex')
  const inputHash = crypto
    .pbkdf2Sync(inputPassword, salt, 1000, 64, 'sha512')
    .toString('hex')
  const passwordsMatch = user.hash === inputHash
  // console.log(passwordsMatch);
  // console.log(inputPasswordHash, '\n\n\n', user.hash);
  return passwordsMatch
}
