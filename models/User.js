const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    thoughts: [
        {
        // Array of _id values referencing the Thought model
        type: Schema.Types.ObjectId,
        ref: 'Thoughts'
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
},
{
    toJson: {
        virtuals: true,
    },
    id: false
    })
    
            // Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
        UserSchema.virtual('friendCount').get(function() {
            return this.friends.length;
});

const User = model('User', UserSchema);

module.exports = User;