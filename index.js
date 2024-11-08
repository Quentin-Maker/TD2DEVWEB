const express = require('express');
const app = express();
const port = 3000;
const usersRouter = require("./routes/users.js")

//MIDDLAWARE
app.use(express.json());
//use endpoint
app.use("/api/", usersRouter)

// GET : LIRE tous les utilisateurs
app.get("/:id", (req, res) => {
	res.json({
		msg: "Welcome",
	})
})

app.listen(port, () => {
	console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});