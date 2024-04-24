import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "../firebase/firebaseConfig";

export const signUp = (email, password) => {
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("user signiedUp", user);
        resolve(userCredential);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const login = (email, password) => {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("user in authServices", user);
        resolve(userCredential);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const logout = () => {
  return signOut();
};