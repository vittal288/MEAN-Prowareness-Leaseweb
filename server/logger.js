let bunyan = require('bunyan');
let argv = require('yargs').argv;
let config = require('./config/config.json');
var logLevel = argv.logLevel || 'debug';
const ENV = process.env.NODE_ENV;
var logRules = config[ENV].LOGS_CONFIG

var loggerJSON = {
	type: 'rotating-file',
	period: '1d'
};

// construct log file path with name 
function getLogFileName(logLevel) {
	return `./logs/legal-dial-${logLevel}-${new Date().getFullYear()}-${(new Date().getMonth() + 1)}-${new Date().getDate()}.log`
}

function buildStreamsArray() {
	var arr = logRules[logLevel];
	var stremArr = [];
	for (var i = 0; i < arr.length; i++) {
		var obj = JSON.parse(JSON.stringify(loggerJSON));
		obj.level = arr[i];
		obj.path = getLogFileName(arr[i]);
		stremArr.push(obj);
	}		
	return stremArr;
}

module.exports = {
	logger: bunyan.createLogger({
		name: 'DialLegal',
		streams: buildStreamsArray()
	})
};