import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector  } from 'reselect';
import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";
import withSpinner from "../with-spinner/with-spinner.component";
import CollectionOverview from "./collection-overview.component";


const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
});

const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    withSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;

