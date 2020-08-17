import ShopActionTypes from "./shop.types";
import {firestore, convertCollectionSnapshotToMap} from '../../firebase/firebase.util';

export const fetchCollectionStart = () => ({
    type:ShopActionTypes.FECTH_COLLECTIONS_START

})


export const fetchCollectionsSuccess = collectionsMap => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap

})


export const fetchCollectionFailure = errMesage => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errMesage
})



export const fetchCollectionStartAsync = () => {

    return dispatch => {
    
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionStart());

        collectionRef.get().then((snapshot) => {
        const collectionsMap = convertCollectionSnapshotToMap(snapshot);

        dispatch(fetchCollectionsSuccess(collectionsMap));
       
        //this.setState({loading: false})
        }).catch(e =>{
            dispatch(fetchCollectionFailure(e.message));

        })

    }

}

