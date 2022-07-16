const express = require('express');
const req = require('express/lib/request');

const userRouter = express.Router();

let users = [
  {
    id: 1,
    name: 'mohamad'
  },
  {
    id: 2,
    name: 'jane'
  },
];

userRouter.get('/getAllUsers', (req, res) => {
  res.json({ users });
});

userRouter.post('/createNewUser', (req, res) => {
  const { name } = req.body;
  const createdUser = {
    name,
    id: users.length + 1,
  }
});

userRouter.route('/:id').get((req, res) => {
  const { id } = req.params;
  const selectedUser = users.find(user => '' + user.id === id);
  res.json({ user: selectedUser })
}).put((req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  users = users.map(val => {
    if ('' + val.id === id) {
      return {
        id, name
      }
    } else {
      return val;
    }
  })
  res.json(users)
}).delete((req, res) => {
  const { id } = req.params;
  users = users.filter(value => '' + value.id !== id);
  res.json({ users })
})


module.exports = userRouter;