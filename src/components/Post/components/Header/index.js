import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import ProfilePicture from '../../../ProfilePicture';
import styles from './styles';

const Header = ({channelname, highthumbnail}) => {
    return(
        <View style= {styles.container}>
            <View style= {styles.left}>
                <ProfilePicture uri= {highthumbnail} size= {50} />
                <Text style= {styles.name}>{channelname}</Text>
            </View>
            
            <View style= {styles.right}>
                <Icon name="dots-three-vertical" size={16} color="#900" />
            </View>
        </View>
    );
}

export default Header;