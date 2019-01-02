var mongoose = require('mongoose');

var bookingSchema = new mongoose.Schema({
  start: Date,
  end: Date,
  bookingType: String,
  equipment: Boolean,
  vehicle: Boolean,
  rate: String,
  client: String,
  booker: String,
  bookerEmail: String,
  additionalInfo: String
},
{ timestamps: {
  }
});

var Booking = mongoose.model("Booking", bookingSchema);

module.exports = {Booking};
