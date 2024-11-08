const db = require("../database")

// fonction de point de terminaison d'API 
exports.getAllUsers = function (req, res) {
	db.all("SELECT * FROM users", [], (err, rows) => {
		if (err) {
			res.status(500).json({ error: err.message })
		} else {
			res.json(rows)
		}
	})
}

export.createNewUser = (req, res) => {
    const { firstName, lastName } = req.body
    //ADD TO THE USERS ARRAY const newUser
    const newUser = {
        firstName,
        lastName,
    }
    const newUserId = usersArray.length + 1
    
    newUser.ID = newUserId
    usersArray.push(newUser)

    res.status(201).json({
        msg: "New user added newUser",
        newUser,
    })
}