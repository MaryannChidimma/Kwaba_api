import express from "express";
const appResponse = require('../../lib/appResponse');
const inviteService = require('../services/invitationService');
const { verifyToken } = require('../services/verifyTokenService');
const { MESSAGES } = require('../config/constants');
import { AuthRequest} from "../interfaces/UtilInterface"

class InviteCntrl {
  invite = async (req: AuthRequest, res: express.Response) => {
    const newInvites = await inviteService.invite(req);

    return res.status(201).send(appResponse('Invitation mail sent', newInvites));
  };

  verifyToken = async (req: express.Request, res: express.Response) => {
    const invite = await verifyToken('InvitationModel', req.params.token, MESSAGES.USER_NOT_EXIST);
    res.status(200).send(appResponse(MESSAGES.TOKEN_VERIFIED, invite));
  };

  acceptInvitation = async (req: express.Request, res: express.Response) => {
    const newInvite = await inviteService.acceptInvitation(req.body);

    return res.status(201).send(appResponse('Invite accepted', newInvite));
  };

  declineInvitation = async (req: express.Request, res: express.Response) => {
    const response = await inviteService.declineInvitation(req.body);

    return res.status(201).send(appResponse(response));
  };

  getAllInvites = async (req: express.Request, res: express.Response) => {
    const invites = await inviteService.getAllInvites(req.params.planId);

    return res.status(200).send(appResponse('invites', invites));
  };
}

export default new InviteCntrl();
