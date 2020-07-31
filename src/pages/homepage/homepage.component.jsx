
import React from 'react';
import {Route} from 'react-router-dom';
import "./homepage.styles.scss";

import Directory from '../../components/directory/directory.component';
import { HomePageContainer } from './homepage.styles';

const HomePage = () => (
    <HomePageContainer>
        <Directory />
    </HomePageContainer>
)

export default HomePage;