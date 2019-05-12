const mongoose = require('mongoose');
const {Schema} = mongoose;

const BookSchema = new Schema({
   name : {type : String, required: true},
   editorial : {type : String, required: true},
   genre : {type : String, required: true},
   author : {type : String, required: true},
   location : {type : String, required: true},
   state : {type : String, required: true},
   year_of_edition : {type : String, required: true}
});

module.exports = mongoose.model('Book', BookSchema);
