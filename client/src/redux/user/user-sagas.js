import {takeLatest, put, call, all} from 'redux-saga/effects'
import { auth, googleProvider, createUserProfileDocument, getCurrentUser } from '../../firebase/firebase.util'
import UserActionTypes from './user.types';
import { signInSuccess, signInFailure, signOutSuccess, signOutFailure, signUpFailure, signUpSuccess, emailSignInStart } from './user.actions';




export function* getSnapshotFromUserAuth(userAuth){

    try {
        const userRef = yield call(createUserProfileDocument, userAuth);
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({id:userSnapshot.id, ...userSnapshot.data()}));    
    } catch (error) {
        yield put(signInFailure(error));
    }
}

export function* onCheckUserSession(){
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* isUserAuthenticated(){
    try {
        const userAuth = yield getCurrentUser();
        if(!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth);
    } catch (error) {
        
    }
}

export function* onEmailSignInStart(){
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

function* signInWithEmail({payload: {email, password}}){
    try {
        const {user} = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(user);

    } catch (error) {
       yield put(signInFailure(error));
    }
}

export function* onGoogleSignInStart(){
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}


export function* signInWithGoogle(){
    try {
        const {user} = yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUserAuth(user);
    } catch (error) {
        yield put(signInFailure(error));
    }
}

export function* onSignOutStart(){
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

export function* signOut(){
    try {
        yield auth.signOut();
        yield put(signOutSuccess());
    } catch (error) {
        yield put(signOutFailure());
    }
}


export function* signUp({payload: {displayName, email, password, confirmPassword}}){
    
    if(password !== confirmPassword){
        const error = "passwords don't match"; 
        yield put(signUpFailure(error));
        alert(error);
        return;
    }

    try{
        //returns user auth object  
        const {user} = yield auth.createUserWithEmailAndPassword(email, password);
        yield createUserProfileDocument(user, {displayName});
        yield put(signUpSuccess());
        yield put(emailSignInStart({email, password}));

    }catch(error){
        yield put(signUpFailure(error));
    }
}

export function* onSignUpStart(){
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}



export function* userSagas(){
    yield all([call(onGoogleSignInStart), 
        call(onEmailSignInStart), 
        call(onCheckUserSession), 
        call(onSignOutStart),
        call(onSignUpStart)] 
        );
}