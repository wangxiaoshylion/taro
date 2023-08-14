import request from './request';

export function getUserName(userID) {
  return request(`/users/${userID}`).then((user: { name: string }) => user.name);
}
