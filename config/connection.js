const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/penny-for-your-thoughts', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = mongoose.connection;