import _ from 'lodash';

export const isAnyFieldEmpty = (eventBody = {}) => {
  if (!eventBody.hasOwnProperty('firstName') ||
      !eventBody.hasOwnProperty('lastName') ||
      !eventBody.hasOwnProperty('email') ||
      !eventBody.hasOwnProperty('eventDate')) {
    return true;
  }

  let isEmpty = false;

  Object.keys(eventBody).forEach((key) => {
    if (_.trim(eventBody[key]).length < 1) {
      isEmpty = true;
    }
  });

  return isEmpty;
}

export const emailValidator = (email = '') => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  return re.test(email);
}