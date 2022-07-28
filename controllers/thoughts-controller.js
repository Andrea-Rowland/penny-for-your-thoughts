const { Thought, User } = require('../models');

const thoughtsController = {

    // get all thoughts
    getAllThoughts(req, res) {
        Thought.find({})
        .then(dbThoughtsData => res.json(dbThoughtsData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },

    // get on thought by id
    getThoughtById({ params }, res) {
        Thought.findOne({ _id: params.id })
        .then(dbThoughtsData => {
            if(!dbThoughtsData) {
                res.status(404).json({ message: "No thought found with this id." });
                return;
            }
            res.json(dbThoughtsData);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },

    // create thought
//     // {
//   "thoughtText": "Here's a cool thought...",
//   "username": "lernantino",
//   "userId": "5edff358a0fcb779aa7b118b"
// }
    createThought ({ body }, res) {
        Thought.create(body)
        .then(dbThoughtsData => {
                   if(!dbThoughtsData) {
                    res.status(404).json({ message: 'No user found with this id.' });
                    return;
                }
                res.json(dbThoughtsData);
            })
        .catch(err => res.status(400).json(err));
    },

    // update thought by id
    updateThought({ params, body}, res) {
        Thought.findOneAndUpdate({ _id: params.id}, body, {new: true })
        .then(dbUserData => {
            if(!dbUserData) {
                res.status(404).json({ message: 'No thought found with this id.' });
                return;
            }
            res.status(200).json({ message: 'action completed' });
        })
        .catch(err => res.status(400).json(err));
    },

    // delete thought
    deleteThought({ params}, res) {
        Thought.findOneAndRemove({ _id: params.thoughtId })
        .then(deletedThought => {
            console.log(deletedThought);
            if(!deletedThought) {
                res.status(404).json({ message: "No thought found with that id." });
            }
            return User.findOneAndUpdate(
                { _id: params.userId },
                { $pull: { thoughts: params.thoughtId } },
                {new: true }
            );
            
        })
        .then(dbUserData => {
            if(!dbUserData) {
                res.status(404).json({ message: "No user found with this id." });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.json(err));
    },


    // add reaction
    addReaction({ params, body }, res) {
        Thought.updateOne({ _id: params.thoughtId },
            { $push: { reactions: body } }
            ).then(dbThoughtData => {
                if(!dbThoughtData) {
                    res.status(404).json({ message: "No thought found with that id. "});
                    return;
                }
                res.json(dbThoughtData);
            })
            .catch(err => res.status(400).json(err));
    
        },

    // delete reaction
    deleteReaction({ params }, res) {
        Thought.updateOne({ _id: params.thoughtId },
            { $pull: { reactions: { _id: params.reactionId } } }
            ).then(dbThoughtData => {
                if(!dbThoughtData) {
                    res.status(404).json({ message: "No thought found with that id. "});
                    return;
                }
                res.json(dbThoughtData);
            })
            .catch(err => res.status(400).json(err));
    
        }
}

module.exports = thoughtsController;

