import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAss-X2Za4KfONZCq-c90HlL8-y_gHUbNQ",
    authDomain: "login-lucas-furtado.firebaseapp.com",
    databaseURL: "https://login-lucas-furtado.firebaseio.com",
    projectId: "login-lucas-furtado",
    storageBucket: "login-lucas-furtado.appspot.com",
    messagingSenderId: "852129708867",
    appId: "1:852129708867:web:63c6b7f6aa8d38bd9e0df6"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;