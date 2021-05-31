
import React from 'react';
import {View} from 'react-native';

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

const Post = ({post}) => {
    return(
        <View>
            <Header highthumbnail= {post["high thumbnail"]}  channelname= {post.channelname}/>
            <Body mediumthumbnail= {post["medium thumbnail"]} />
            <Footer
                 likesCount={post.likes} 
                 title={post.title} 
                 postedAt={post.createdAt} 
                 lowthumbnail= {post["low thumbnail"]}
                 commentUser={post.commentUser}
                 comments={post.comments}

            />
        </View>
    );
} 


export default Post;