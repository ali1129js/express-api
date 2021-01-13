import mongoose from "mongoose";

const ApplicantsSchema = mongoose.Schema({
  id: Number,
  fname: String,
  lname: String,
  phone: Number,
  email: String,
  color: String,
  appointment: Date,
  viewed: Date,
  interested: Date,
  offer: Date,
  bid: Number,
});
export default mongoose.model("Applicants", ApplicantsSchema);
