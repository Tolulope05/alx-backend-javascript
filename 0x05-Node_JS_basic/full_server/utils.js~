const {readFile} = requie("fs");

module.exports = function readDatabase(filePath) {
    const students = {};
    return new Promise((resolve, reject) => {
	readFile(filePath, (err, data) => {
	    if (err) {
		reject(err);
	    }
	    const lines = data.toString().split('\n');
	    const noHeader = lines.slice(1);
	    for (let i=0; i < noHeader.length; i++) {
		if (noHeader[i]) {
		    let field = noHeader[i].toString().split(',');
		    if (students.hasOwnProperty(field[3])) {
			students[field[3]].push(field[0]);
		    } else {
			students[field[3]] = [field[0]];
		    }
		}
	    }
	    resolve(students);
	});
    });
}
