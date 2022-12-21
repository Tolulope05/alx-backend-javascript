import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const p1 = uploadPhoto();
  const p2 = createUser();

  return Promise.all([p1, p2]).then((value) => {
    console.log(`${value[0].body} ${value[1].firstName} ${value[1].lastName}`);
  })
    .catch(() => { console.log('Signup system offline'); });
}
