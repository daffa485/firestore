import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyC6V_x5PIR6duQfy5XrckpnFlRgJlgtSEo",
    authDomain: "djamware-52f3f.web.app ",
    databaseURL: "https://console.firebase.google.com/project/djamware-52f3f/database/firestore/data~2Fboards~2FPad1YBNQ3cQOUGynbXcX",
    projectId: "djamware-52f3f",
    storageBucket: ""
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;