const readDatabase = require("../utils");

class StudentsController {
    static getAllStudents (request, response) {
	readDatabase(process.argv[2].toString()).then((students) => {
	    response.statusCode = 200;
	    response.send("This is the list of our students");
	    const keys = Object.keys(students);
	    keys.sort();
	    for (let i=0; i<keys.length; i++) {
		let output = "";
		output += "Number of students in " + keys[i] + ": " + students[keys[i]] + ". ";
		output += "List: " + students[keys[i]].join(', ');
		response.write(output);
	    }
	    response.end();
	}).catch((error) => {
	    response.statusCode = 500;
	    response.end("Cannot load the database");
	});
    }

    static getAllStudentsByMajor(request, response) {
	readDatabase(process.argv[2].toString()).then((students) => {
	    response.statusCode = 200;
	    let output = "";
	    switch (request.url) {
	    case "/students/CS":
		output += "List: " + students["CS"].join(', ');
		response.end(output);
		break
	    case "/students/SWE":
		output += "List: " + students["SWE"].join(', ');
		response.end(output);
		break
	    default:
		response.statusCode = 500;
		response.end("Major parameter must be CS or SWE");
	    }
	}).catch((error) => {
	    response.statusCode = 500;
	    response.end("Cannot load the database");
	});
    }
}

module.exports = StudentsController;
