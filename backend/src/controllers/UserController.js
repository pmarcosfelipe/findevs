const axios = require('axios');
const User = require('../models/User');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
  async create(request, response) {
    const { github_username, techs, latitude, longitude } = request.body;

    let user = await User.findOne({ github_username });

    if (!user) {
      const apiResponse = await axios.get(
        `https://api.github.com/users/${github_username}`
      );

      const { name = login, avatar_url, bio } = apiResponse.data;

      const techsArr = parseStringAsArray(techs);

      const location = {
        type: 'Point',
        coordinates: [longitude, latitude],
      };

      user = await User.create({
        name,
        github_username,
        bio,
        avatar_url,
        techs: techsArr,
        location,
      });
    }

    return response.json(user);
  },

  async list(request, response) {
    const users = await User.find();

    return response.json(users);
  },

  //TODO
  async update(request, response) {},

  //TODO
  async delete(request, response) {},
};
