import expect from 'expect';

import { emailValidator, isAnyFieldEmpty } from './helpers';

describe ('isAnyFieldEmpty Function', () => {
  it ('should return false if all fields are filled', () => {
    const firstName = 'John';
    const lastName = 'Doe';
    const email = "john.doe@whatever.com";
    const eventDate = '1970-01-01';

    const actual = isAnyFieldEmpty({ firstName, lastName, email, eventDate });
    expect(actual).toBe(false);
  });

  it ('should return true if any field is missing', () => {
    const firstName = 'John';
    const lastName = 'Doe';
    const email = "john.doe@whatever.com";

    const actual = isAnyFieldEmpty({ firstName, lastName, email });
    expect(actual).toBe(true);
  });

  it ('should return true if all fields are missing', () => {
    const actual = isAnyFieldEmpty({});
    expect(actual).toBe(true);
  });
});

describe('emailValidator Function', () => {
  it ('should return true if email is valid', () => {
    const email = 'test@email.com';
    const actual = emailValidator(email);
    expect(actual).toBe(true);
  });

  it ('should return false if email is invalid', () => {
    const email = 'test';
    const actual = emailValidator(email);
    expect(actual).toBe(false);
  });

  it ('should return false if email is missing', () => {
    const actual = emailValidator();
    expect(actual).toBe(false);
  });
});