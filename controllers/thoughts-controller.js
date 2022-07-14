const { Thoughts, User } = require('../models');

const thoughtsController = {

    // get all thoughts
    getAllThoughts(req, res) {
        Thoughts.find({})
        .then(dbThoughtsData => res.json(dbThoughtsData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },

    // get on thought by id
    getThoughtsById({ params }, res) {
        Thoughts.findOne({ _id: params.id })
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
    // {
    //     "thoughtText": ""
    // }
    createThought ({ body}, res) {
        Thoughts.create(body)
        .then(dbThoughtsData => res.json(dbThoughtsData))
        .catch(err => res.status(400).json(err));
    },

    // update thought by id
    updateThought({ params, body}, res) {
        Thoughts.findOneAndUpdate({ _id: params.id}, body, {new: true })
        .then(dbUserData => {
            if(!dbUserData) {
                res.status(404).json({ message: 'No thought found with this id.' });
                return;
            }
            res.json(dbThoughtsData);
        })
        .catch(err => res.status(400).json(err));
    },

    // delete thought
    removeThought({ params}, res) {
        Thought.findOneAndDelete({ _id: params.thoughtId })
        .then(deletedThought => {
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
    }
}