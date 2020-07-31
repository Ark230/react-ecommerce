import { createSelector } from "reselect";
import memoize from 'lodash.memoize';

const COLLECTION_ID_MAP = {
    hats:1,
    sneakers:2,
    jackets:3,
    womens:4,
    mens:5
}

export const selectShop = state => state.shop;

export const selectCollections = createSelector([selectShop], shop => shop.collections);

export const selectCollectionsForPreview = createSelector([selectCollections], collections => collections ? Object.keys(collections).map(key => collections[key]) : []);

/*
    a memoized function was created with lodash 
    due to selectCollection needs another param
    before the createSelector method appears.
*/
export const selectCollection = memoize(collectionUrlParam => createSelector([selectCollections], collection => collection ? collection[collectionUrlParam] : null));

