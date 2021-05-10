import mongoose from 'mongoose';

const PlayerSchema = new mongoose.Schema({
firstName: String,
lastName: String,
yearOfBirth: Number

});

export default mongoose.model('Player', PlayerSchema);