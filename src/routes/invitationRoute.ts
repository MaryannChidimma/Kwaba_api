import express from 'express';
import inviteCtrl from '../controllers/invitationController';
import { authenticate } from '../middlewares/auth';
import { inviteSchema, acceptDeclineSchema } from '../validators/inviteValidator';
import { Validator } from '../validators';

const router = express.Router();
function InviteRouter() {
router.post('/', Validator(inviteSchema, 'body'), authenticate, inviteCtrl.invite);
router.get('/verify/:token', inviteCtrl.verifyToken);
router.patch('/accept', Validator(acceptDeclineSchema, 'body'), inviteCtrl.acceptInvitation);
router.delete('/decline', Validator(acceptDeclineSchema, 'body'), inviteCtrl.declineInvitation);
router.get('/', inviteCtrl.getAllInvites);

return router;
}

export default InviteRouter