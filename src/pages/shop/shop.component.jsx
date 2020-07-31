import React from 'react';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import { Route } from 'react-router-dom';
import CollectionPage from '../category/collection.component';
import {convertCollectionSnapshotToMap} from '../../firebase/firebase.util';
import {firestore} from '../../firebase/firebase.util';
import { connect } from 'react-redux';
import { updateCollection } from '../../redux/shop/shop.actions';
import withSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionOverviewWithSpinner = withSpinner(CollectionOverview);
const CollectionPageWithSpinner = withSpinner(CollectionPage);


class ShopPage extends React.Component{

  state = {
    loading:true
  }


  unsubscribeFromSnapshot = null;

  componentDidMount(){
    const {updateCollections} = this.props;
    const collectionRef = firestore.collection('collections');

    collectionRef.get().then((snapshot) => {
      const collectionsMap = convertCollectionSnapshotToMap(snapshot);
       updateCollections(collectionsMap);
       this.setState({loading: false})
    });

  }

    render(){
      const {match} = this.props;
      const {loading} = this.state;
      return(
        <div className="shop-page"> 
        <Route exact path={`${match.path}`} render={props => (<CollectionOverviewWithSpinner isLoading={loading} {...props} />)}/>
        <Route path={`${match.path}/:collectionId`} render={ props => (<CollectionPageWithSpinner isLoading={loading} {...props}/>)}/>
        </div>
      );
    }


}
   

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap => dispatch(updateCollection(collectionsMap))
})


export default connect(null, mapDispatchToProps)(ShopPage);