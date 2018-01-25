import 'babel-polyfill';
import expect from 'expect';
import request from 'supertest';

import app from '../server';
import Event from '../models/Event';

describe('POST /', () => {

  beforeEach(() => {
    return Event.remove({});
  });

  it ('should add an event', (done) => {
    const firstName = 'John';
    const lastName = 'Doe';
    const email = 'john.doe@email.com';
    const eventDate = '2018-01-27';

    request(app)
      .post('/')
      .send({ firstName, lastName, email, eventDate })
      .expect(200)
      .expect((res) => {
        expect(res.body.message).toBe('Event succesfully added.');
      })
      .end(async (err, res) => {
        if (err) {
          return done(err);
        }

        try {
          const events = await Event.find({ firstName });
          expect(events.length).toBe(1);
          expect(events[0].lastName).toBe(lastName);
          done();
        } catch (e) {
          return done(e);
        }
      });
  });

  it ('should throw 400 if any field is missing', (done) => {
    request(app)
      .post('/')
      .expect(400)
      .expect((res) => {
        expect(res.body.message).toBe('Fill all fields before submitting.');
      })
      .end(done);
  });

  it ('should throw 400 if email is invalid', (done) => {
    const firstName = 'John';
    const lastName = 'Doe';
    const email = 'john.doe@ema';
    const eventDate = '2018-01-27';

    request(app)
      .post('/')
      .send({ firstName, lastName, email, eventDate })
      .expect(400)
      .expect((res) => {
        expect(res.body.message).toBe('Invalid email.');
      })
      .end(done);
  });
});