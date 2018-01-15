var mongoose = require('mongoose')
var Schema = mongoose.Schema

var themeSchema = new Schema({
    name: String,
    describe: String,
    themeSign: String,
})
module.exports = mongoose.model('Theme',themeSchema)

