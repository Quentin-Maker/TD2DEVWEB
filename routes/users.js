const express = require("express")
const router = express.Router()
const { 
	getAllUsers,
	createNewUser,
	updateUser,
	deleteUser
} = require("../controllers/usersControllers")


const usersArray=[
    { id: 1, firstName: 'John', lastName: 'Doe', role: 'admin' },
	{ id: 2, firstName: 'Jane', lastName: 'Smith', role: 'user' },
	{ id: 3, firstName: 'Alice', lastName: 'Johnson', role: 'moderator' },
	{ id: 4, firstName: 'Bob', lastName: 'Brown', role: 'user' },
	{ id: 5, firstName: 'Charlie', lastName: 'Davis', role: 'admin' }
]


// Put method
router.put("/users/:id", updateUser)

// delete Method
router.delete("/users/:id", deleteUser)


// Get Method
router.get("/users", getAllUsers)

// post method
router.post("/users", createNewUser)

module.exports = router