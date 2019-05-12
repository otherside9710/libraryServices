const mongoose = require('mongoose');
const {Schema} = mongoose;
const Book = require('./book');
const Student = require('./student');


const LoanSchema = new Schema({
   book : Book,
   student : Student,
   date_of_loan : {type : Date, required: true},
   date_of_return : {type : Date, required: true},
   return : {type : Boolean, required: true}
});

module.exports = mongoose.model('Loan', LoanSchema);