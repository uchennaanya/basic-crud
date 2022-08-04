const route = require('express').Router()
const { createUser, getUsers, getUser, updateUser, deleteUser } = require('../controllers/userController');

route.post('/createuser', createUser)
route.get('/getusers', getUsers)
route.get('/getuser/:id', getUser)
route.patch('/updateuser/:id', updateUser)
route.delete('/deleteuser/:id', deleteUser)

module.exports = route
