const InvitationModel = require('../models/invitationModel');
const UserModel = require('../models/userModel');
const { NotFoundError } = require('../../lib/errors');
const { decryptData } = require('../utility/dataCrypto');

const models = { InvitationModel, UserModel };

const verifyToken = async (Model:any, token:string, errorMessage:string) => {
  const [jwtToken, Id] = token.split('__');

  const item = await Model.findById(Id);
  if (!item) throw new NotFoundError(errorMessage);

  const lastUpdatedTime = new Date(item.updatedAt).getTime();
  const secret = `${item._id}${lastUpdatedTime}`;

  await decryptData(jwtToken, secret);

  return item;
};

module.exports = {
  verifyToken,
};
