// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
import { getDatabase, ref, set, get, update } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-database.js";
import { getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAvZd2AKleaKdzfCuTnJo69v0lvGlOb3gk",
    authDomain: "first-project-b8daa.firebaseapp.com",
    databaseURL: "https://first-project-b8daa-default-rtdb.firebaseio.com",
    projectId: "first-project-b8daa",
    storageBucket: "first-project-b8daa.appspot.com",
    messagingSenderId: "1019083194060",
    appId: "1:1019083194060:web:9a67fa7f9b09688924cc69",
    measurementId: "G-SPPQTFWZNV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);


let email, password;
function Ready(){
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;

}

//------------------Sign In--------------//
document.getElementById("signIn").onclick = function() {
    Ready();
    console.log(email, password)
    const promise = signInWithEmailAndPassword(auth, email, password);
    promise.catch(e => alert(e.message));
    alert("Signed In:  " + email);

    setTimeout(() => {
        sessionStorage.setItem("email", email);
        location.href = "information.html";
    }, 2000)

    // firebase.database().ref('user/' + email).on('value', function (snapshot)
    // {
    //     document.getElementById('emailInfo').value = snapshot.val().UserEmail;
    //     document.getElementById('passwordInfo').value = snapshot.val().UserPassword;
    //     document.getElementById('nameInfo').value = snapshot.val().UserName;
    //     document.getElementById('IDInfo').value = snapshot.val.UserID;
    //     document.getElementById('yearInfo').value = snapshot.val().UserYear;
    //
    // });

}