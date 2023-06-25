const userModel = require('../model/User');
const { requestResponse } = require('../config');

exports.getallUser = () => {
  return new Promise((resolve, reject) => {
    userModel.find({})
      .then((user) => {
        resolve(requestResponse.suksesWithData(user));
      })
      .catch(() => {
        reject(requestResponse.kesalahan);
      });
  });
};
