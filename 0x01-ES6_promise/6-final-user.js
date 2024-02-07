import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const user = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName);

  return Promise.allSettled([user, photo]).then((data) => {
    const res = [];
    data.forEach((item) => {
      if (item.status === 'fulfilled') {
        res.push({ status: item.status, value: item.value });
      } else {
        res.push({ status: item.status, value: `${item.reason}` });
      }
    });
    return res;
  });
}
