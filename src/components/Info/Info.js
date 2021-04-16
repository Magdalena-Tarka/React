import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
//import PropTypes from 'prop-types';
import {InfoData} from '../../data/dataStore';

const Info = () => (
  <Container>
    <Hero titleText={InfoData.heroTitle} imageText={InfoData.heroImage} />
    <h2>{InfoData.title}</h2>
    <p>{InfoData.subpageContent}</p>
  </Container>
);

/*Info.prototype = {
  titleText: PropTypes.node.isRequired,
  imageText: PropTypes.string,
};*/

export default Info;