const { Thought } = require('../models');
const User = require('../models/User');

const { ObjectId } = require('mongoose').Types;

module.exports = {

  async getUsers(req, res) {
    try {
      const user = await User.find();
      res.json(user);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId });
      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' })
      }

      res.json({user});
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  async createUser(req, res) {
    try {
      const user = await user.create(req.body);
      res.json(student);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  
  async deleteUser(req, res) {
    try {
      const user = await user.findOneAndRemove({ _id: req.params.userId });

      if (!user) {
        return res.status(404).json({ message: 'No such user exists' });
      }

      const thoughts = await Thought.findOneAndUpdate(
        { user: req.params.userId },
        { $pull: { user: req.params.userId } },
        { new: true }
      );

      if (!thoughts) {
        return res.status(404).json({
          message: 'User deleted, but no courses found',
        });
      }

      res.json({ message: 'User successfully deleted' });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  
  async addFriend(req, res) {
   
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friend: req.body } },
        { runValidators: true, new: true }
      );

      if (!user) {
        return res
          .status(404)
          .json({ message: 'No user found with that ID' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  
  async deleteFriend(req, res) {
    try {
      const user = await user.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friend: { friendId: req.params.friendId } } },
        { runValidators: true, new: true }
      );

      if (!user) {
        return res
          .status(404)
          .json({ message: 'No user found with that ID' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },


  async updateUser(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

    if (!user) {
      return res.status(404).json({ message: 'No user with this id!' });
    }

    res.json(user);
    } catch (err) {
    res.status(500).json(err);
    }
  },
};