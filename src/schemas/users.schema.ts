import * as mongoose from 'mongoose';

export const UsersSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    age: {
        type: Number,
    },
});
