import React from 'react';
import {Text, Image} from 'react-native';

import styles from './styles';

const Body = ({mediumthumbnail}) => {
    return(
        <Image source= {{uri: mediumthumbnail}} style= {styles.image} />
    );
}

export default Body;