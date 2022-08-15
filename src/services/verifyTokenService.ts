import db from '../models/index'
const { Model: InvitationModel} = db
import { NotFoundError } from '../../lib/appError';
import { decryptData } from '../utility/dataCrypto';

const verifyToken = async (Model:any, token:string, errorMessage:string) => {
  const [jwtToken, Id] = token.split('__');

  const item = await Model.findById(Id);
  if (!item) throw new NotFoundError(errorMessage);

  const lastUpdatedTime = new Date(item.updatedAt).getTime();
  const secret = `${item._id}${lastUpdatedTime}`;

  await decryptData(jwtToken, secret);

  return item;
};

export = {
  verifyToken,
};
