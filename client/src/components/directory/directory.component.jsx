import React from 'react';
import MenuItem from '../menu-item/menu-item.component'
import './directory.styles.scss';

import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySelections } from '../../redux/directory/directory.selectors';


const Directory = ({sections}) => {

  return(  <div className="directory-menu">
        {sections.map(({id, ...otherProperties}) => (
            <MenuItem key={id} {...otherProperties}/>
        ))
        
        }
    </div>
    );


}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySelections
})

export default connect(mapStateToProps, null)(Directory);