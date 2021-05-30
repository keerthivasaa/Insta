
import React, {useState, useEffect} from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import LikeIcon from 'react-native-vector-icons/AntDesign';
import CmtIcon from 'react-native-vector-icons/Fontisto';
import ShareIcon from 'react-native-vector-icons/Ionicons';
import BmIcon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const Footer = ({likesCount: likesCountProps, caption, postedAt}) => {

    const [isLiked, setIsLiked] = useState(false);
    const [likesCount, setLikesCount] = useState(0);

    const onLikePressed = () => {
        const amount = isLiked ? -1 : 1;
        setLikesCount( likesCount + amount);

        setIsLiked(!isLiked);
        
    }

    useEffect(() => {
        setLikesCount(likesCountProps)
    }, [])

    return(
        <View style= {styles.container}>

            <View style= {styles.iconsContainer}>

                    <View style= {styles.left}>

                        <TouchableWithoutFeedback onPress= {onLikePressed}>
                            {isLiked ? 
                             <LikeIcon name="heart" size={25} color= {"#e73838"} /> :
                             <LikeIcon name="hearto" size={25} color= {"#545454"} />
                            }
                        </TouchableWithoutFeedback>

                        <CmtIcon name="comment" size={23} color= {"#545454"} />
                        <ShareIcon name="paper-plane-outline" size={25} color= {"#545454"} />

                    </View>

                <BmIcon name="bookmark-o" size={25} color= {"#545454"} />

            </View>
        
            <Text style= {styles.likes}>{likesCount} Likes</Text>
            <Text style= {styles.caption}>{caption}</Text>
            <Text style= {styles.postedAt}>{postedAt}</Text>

        </View>          
    );
}

export default Footer;