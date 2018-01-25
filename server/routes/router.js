import express from 'express';
import _ from 'lodash';

import Event from '../models/Event';
import { isAnyFieldEmpty, emailValidator } from '../utils/helpers';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.post('/', async (req, res) => {
  const eventBody = _.pick(req.body, ['firstName', 'lastName', 'email', 'eventDate']);

  if (isAnyFieldEmpty(eventBody)) {
    return res.status(400).send({
      message: 'Fill all fields before submitting.',
    });
  }

  if (!emailValidator(eventBody.email)) {
    return res.status(400).send({
      message: 'Invalid email.',
    });
  }

  const event = new Event(eventBody);
  try {
    const reponse = await event.save();
    res.send({
      message: 'Event succesfully added.',
    });
  } catch (e) {
    res.status(400).send({
      message: 'An error occured while saving event.',
    });
  }
});

export default router;
