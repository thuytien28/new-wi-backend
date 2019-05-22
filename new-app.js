process.appMode = 'auto-model';
var SequelizeAuto = require('sequelize-auto')

var appMain = require("./app-entry.js");
var auto = new SequelizeAuto('wi0710_tien', 'root', '', {
	host: 'localhost',
	dialect: 'mysql',
	directory: './server/new-models', // prevents the program from writing to disk
	port: '3306',
	camelCase: true
	// additional: {
	//     timestamps: false
	//     //...
	// },    
	// tables: ['pets']
	//...
})

     

auto.run(function (err) {
	if (err) throw err;
    /**
 * Created by minhtan on 20/06/2017.
 */

	appMain();
});
