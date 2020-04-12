const User = require('../models/User');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
  async list(request, response) {
    const { latitude, longitude, techs } = request.query;

    const techsArr = parseStringAsArray(techs);

    const users = await User.find({
      techs: { $in: techsArr },
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [longitude, latitude],
          },
          $maxDistance: 10000,
        },
      },
    });

    return response.json({ users });
  },
};
