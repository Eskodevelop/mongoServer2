import mongoose from 'mongoose';

const RivalSchema = new mongoose.Schema({
name: String,
city: String,
position: Number

});

export default mongoose.model('Rival', RivalSchema);