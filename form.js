// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
import { getDatabase, ref, set, get, update } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-database.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js";

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


let email, password, name, ID, yearInSchool;
function Ready(){
    email = document.getElementById('email2').value;
    password = document.getElementById('password2').value;
    name = document.getElementById('name').value;
    ID = document.getElementById('ID').value;
    yearInSchool = document.getElementById('yearInSchool').value;
}
// //------------------Sign In--------------//
// document.getElementById("signIn").onclick = function() {
//     Ready();
//     console.log(email, password)
//     const promise = signInWithEmailAndPassword(auth, email.value, password.value);
//     promise.catch(e => alert(e.message));
//     alert("Signed In:  " + email);
//
//     location.href = "information.html";
//     //
//     // firebase.database().ref('user/' + password).on('value', function (snapshot)
//     // {
//     //     document.getElementById('emailInfo').value = snapshot.val().UserEmail;
//     //     document.getElementById('passwordInfo').value = snapshot.val().UserPassword;
//     //     document.getElementById('nameInfo').value = snapshot.val().UserName;
//     //     document.getElementById('IDInfo').value = snapshot.val.UserID;
//     //     document.getElementById('yearInfo').value = snapshot.val().UserYear;
//     //
//     // });
//
// }
//-----------New Account---------------//
document.querySelector(".createAccount").addEventListener("click", () => {
    Ready();
    console.log("e")
    console.log(email, password)
    createUserWithEmailAndPassword(auth, email, password).then(user => {
        set(ref(db, `/users/${ID}`), {
            email: email,
            password: password,
            username: name,
            school: yearInSchool,
            id: ID
        }).then(() => {
            console.log("Added to the database")
        })

        setTimeout(() => {
            sessionStorage.setItem("email", email);
            location.href = "information.html";
        }, 2000)
    }).catch(err => {
        console.log(err)
    })
});
