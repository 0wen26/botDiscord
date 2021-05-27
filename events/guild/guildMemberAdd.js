const profileModel = require("../../models/dailySchema");

module.exports = async (client, discord, member) => {
  let profile = await DailyModel.create({
    userID: member.userID,
  });
  profile.save();
};
