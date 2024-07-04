import * as types from '../actionTypes/authActionTypes';
import fire from "../../config/firebase";

const loginUser = (payload) => {
    return {
        type: types.SIGN_IN,
        payload,
    }
}

const logoutUser = () => {
    return {
        type: types.SIGN_OUT,
    }
}

//action creators-

export const signInUser = (email, password, setSuccess) => (dispatch) => {
    // console.log(email,password);
    fire.auth().signInWithEmailAndPassword(email, password).then((user) => {
        // console.log(user);
        dispatch(loginUser({ uid: user.user.uid, email: user.user.email, displayName: user.user.displayName }));
        setSuccess(true);
    }).catch((error) => {
        alert("Invalid Email or Password!")
    })
};

export const signUpUser = (name, email, password , setSuccess) => (dispatch) => {
    // console.log(name, email,password);
    fire.auth().createUserWithEmailAndPassword(email, password).then((user) => {
        fire.auth().currentUser.updateProfile({
            displayName: name,
        }).then(() => {
            const currentUser = fire.auth.auth().currentUser;
            // console.log(currentUser.user);
            dispatch(loginUser({uid: currentUser.uid,name:currentUser.displayName,email:currentUser.email}))
            setSuccess(true);
        })
        .catch((error) => {
            console.log(error);
        });
    })
    .catch((error)=>{
        if(error.code === "auth/email-already-use"){
            alert("Email already in use!");
        }
        if(error.code === "auth/invalid-email"){
            alert("Invalid Email!");
        }
        if(error.code === "auth/weak-password"){
            alert("Weak Password!");
        }
        
    })
};

export const signOutUser = () => (dispatch) => {
    fire.auth().signOut().then(() => {
        dispatch(logoutUser());
    })
};

export const checkIsLoggedIn = () => (dispatch) => {
    fire.auth().onAuthStateChanged((user) => {
        if(user){
            dispatch(loginUser({
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
            }))
        }
    })
}