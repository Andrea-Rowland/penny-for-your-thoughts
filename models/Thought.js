const { Schema, model } = require('mongoose');

const ReactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId
    },
    reactionBody: {
        type: String
    },
    username: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

});

const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        match: '/^.{1, 280}$/'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    username: {
        type: String,
        required: true
    },
    reactions: 
        [ReactionSchema]
},
{
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
}
)    
    
    ThoughtSchema.virtual('reactionCount').get(function() {
        return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thoughts;