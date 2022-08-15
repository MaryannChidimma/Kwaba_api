import jwt from "jsonwebtoken";
import crypto from "crypto";
import constants from "../config/constants";
import bcrypt from "bcrypt";
import { v4 } from "uuid";
/**
 *
 * @param dataToEncrypt This is the data that will encryped
 * @param expirationTime The expiration time in hrs
 */

const encryptData = function (
  dataToEncrypt: object,
  expirationTime: number = 1,
  secretKey: string = constants.JWT_SECRET_KEY!
) {
  console.log(constants.JWT_SECRET_KEY!)
  const encryptedData = jwt.sign(dataToEncrypt, secretKey, {
    expiresIn: `${expirationTime}h`,
  });

  return encryptedData;
};

const decryptData = function (
  tokenToDecrypt: string,
  secretKey: string = constants.JWT_SECRET_KEY!
) {
 
  const decryptedData = jwt.verify(tokenToDecrypt, secretKey!);
  return decryptedData as any;
};

const passwordHash = async function (stringToHash: string) {
  const hashedPassword = await bcrypt.hash(stringToHash, 10);
  return hashedPassword;
};

const comparePassword = async (password: string, hashedPassword: string) => {
  const isPasswordCorrect = await bcrypt.compare(
    password.trim(),
    hashedPassword,
  );
  return isPasswordCorrect;
};


export { encryptData, decryptData, passwordHash,comparePassword};
