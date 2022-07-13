const { Schema, model } = require('mongoose');

const ThoughtScheme = new Schema({
    thoughtText: {
        type: String,
        required: true,
        match: '/^.{1, 280}$/'
    },
    createdAt: {
        type: Date,
        default: Date.now
        // Use a getter method to format the timestamp on query
    },
    username: {
        type: String,
        required: true
    },
    reactions: {
        // array of nested documents created with the reactionSchema
    },
    reactionCount: {
        // retrieves the length of the thought's reactions array field on query
    }
})