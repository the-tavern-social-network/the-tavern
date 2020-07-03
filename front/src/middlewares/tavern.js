import axios from 'axios';
import { INVITE_CONTACT, DELETE_TAVERN } from '../actions';
import { apiUrl } from '../util/index';

export const tavern = (store) => (next) => async (action) => {
  const { user } = store.getState();
  switch (action.type) {
    case INVITE_CONTACT:
      try {
        const { data } = await axios.post(`${apiUrl}/tavern`, {
          gamemaster_id: +user.loggedUser.id,
          participant_id: +action.contactId,
          tavern_id: action.tavernId,
        });

        action.participant = data.participant;
        action.gamemaster = data.gamemaster;

        next(action);
      } catch (err) {
        console.trace(err);
      }
      break;
    case DELETE_TAVERN:
      try {
        let data;
        if (action.gamemaster && action.participant) {
          data = {
            gamemaster_id: +action.gamemaster.id,
            participant_id: +action.participant.id,
          };
        }

        const response = await axios.delete(`${apiUrl}/tavern/${action.tavernId}`, {
          data,
        });

        action.gamemaster = response.data.gamemaster;
        action.participant = response.data.participant;

        next(action);
      } catch (err) {
        console.trace(err);
      } finally {
        next(action);
      }
      break;
    default:
      next(action);
  }
};
