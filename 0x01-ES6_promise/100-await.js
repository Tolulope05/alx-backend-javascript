import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const prom1 = await uploadPhoto();
    const prom2 = await createUser();

    return ({ photo: prom1, user: prom2 });
  } catch (error) {
    return ({ photo: null, user: null });
  }
}
