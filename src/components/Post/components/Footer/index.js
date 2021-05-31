
import React, { useState, useEffect, useCallback } from 'react';
import { Text, TouchableWithoutFeedback, View, Image } from 'react-native';
import LikeIcon from 'react-native-vector-icons/AntDesign';
import CmtIcon from 'react-native-vector-icons/Fontisto';
import ShareIcon from 'react-native-vector-icons/Ionicons';
import BmIcon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const Footer = ({ likesCount: likesCountProps, title, lowthumbnail, commentUser, comments }) => {

    const [isLiked, setIsLiked] = useState(false);
    const [likesCount, setLikesCount] = useState(0);
    const [showMoreButton, setShowMoreButton] = useState(false);
    const [textShown, setTextShown] = useState(false);
    const [numLines, setNumLines] = useState(undefined);

    const onLikePressed = () => {
        const amount = isLiked ? -1 : 1;
        setLikesCount(likesCount + amount);

        setIsLiked(!isLiked);

    }

    const toggleTextShown = () => {
        setTextShown(!textShown);
    };

    useEffect(() => {
        setLikesCount(likesCountProps)
    }, [])

    useEffect(() => {
        setNumLines(textShown ? undefined : 3);
    }, [textShown]);

    const onTextLayout = useCallback(
        (e) => {
            if (e.nativeEvent.lines.length > 1 && !textShown) {
                setShowMoreButton(true);
                setNumLines(1);
            }
        },
        [textShown],
    );

    return (
        <View style={styles.container}>

            <View style={styles.iconsContainer}>

                <View style={styles.left}>

                    <TouchableWithoutFeedback onPress={onLikePressed}>
                        {isLiked ?
                            <LikeIcon name="heart" size={25} color={"#e73838"} /> :
                            <LikeIcon name="hearto" size={25} color={"#545454"} />
                        }
                    </TouchableWithoutFeedback>

                    <CmtIcon name="comment" size={23} color={"#545454"} />
                    <ShareIcon name="paper-plane-outline" size={25} color={"#545454"} />

                </View>

                <BmIcon name="bookmark-o" size={25} color={"#545454"} />

            </View>
            <View style={styles.likesContainer}>
                <Image source={{ uri: lowthumbnail }} style={styles.image} />
                <Text style={styles.likes}>{likesCount} Likes</Text>
            </View>
            <Text onTextLayout={onTextLayout} numberOfLines={numLines} style={styles.caption}>{title}</Text>
            {showMoreButton ? (
                <Text onPress={toggleTextShown} style={styles.readMoreStyle}>
                    {textShown ? 'Less' : 'More'}
                </Text>
            ) : null}
            <Text style={styles.postedAt}>6 minutes ago</Text>
{/* 
            <View>
                <Text style={styles.commentUser}>{commentUser}</Text>
                <Text style={styles.comments}>{comments}</Text>
            </View> */}


        </View>
    );
}

export default Footer;