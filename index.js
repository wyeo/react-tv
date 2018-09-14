if (process.env.NODE_ENV === 'production') {
		  module.exports = require('./packages/react-tv/dist/react-tv.production.js');
} else {
		  module.exports = require('./packages/react-tv/dist/react-tv.development.js');
}
