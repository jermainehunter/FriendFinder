// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
const path = require("path");

module.exports = (app) => {

// HTML Routes
// =============================================================

	app.get('/', (req, res) => {
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});

	app.get('/survey', (req, res) => {
	  	res.sendFile(path.join(__dirname, "../public/survey.html"));
	});
	
	//default will take users back to home page
	app.get("*", (req, res) => {
		res.sendFile(path.join(__dirname, "../public/home.html"));
	  });
};