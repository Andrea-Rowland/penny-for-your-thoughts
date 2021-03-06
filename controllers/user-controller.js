const { User } = require('../models');

const userController = {

    // get all users
    getAllUsers(req, res) {
        User.find({})
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },

    // get one user by id
    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
        .then(dbUserData => {
            // if no user is found, send 404
            if (!dbUserData) {
                res.status(404).json({ message: "No user found with this id." });
                return
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },

    // create user
    // // {
    //     "username": "",
    //     "email": "",
    //     "thoughts": [],
    //     "friends": [],
    //     "friendCount": #
    // }
    createUser ({ body }, res) {
        User.create(body)
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.status(400).json(err));
    },

    // update user by id
    updateUser({ params, body}, res) {
        User.findOneAndUpdate({ _id: params.id }, body, { new: true })
        .then(dbUserData => {
            if(!dbUserData) {
                res.status(404).json({ message: 'No user found with this id.' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.status(400).json(err));
        },
    
    // delete user
    deleteUser({ params}, res) {
        User.findOneAndDelete({ _id: params.id })
        .then(dbUserData => {
            if(!dbUserData) {
                res.status(404).json({ message: "No user found with that id. "});
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.status(400).json(err));
    },
    
    // add friend
    addFriend({ params }, res) {
    User.updateOne({ _id: params.userId },
        { $push: { friends: params.friendId } }
        ).then(dbUserData => {
            if(!dbUserData) {
                res.status(404).json({ message: "No user found with that id. "});
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.status(400).json(err));

    },


    // delete friend
    deleteFriend({ params }, res) {
        User.updateOne({ _id: params.userId },
            { $pull: { friends: params.friendId } }
            ).then(dbUserData => {
                if(!dbUserData) {
                    res.status(404).json({ message: "No user found with that id. "});
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.status(400).json(err)); 

    }
}


module.exports = userController;
