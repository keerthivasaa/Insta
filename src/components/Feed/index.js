import React, { useEffect, useState } from 'react';
import {FlatList} from 'react-native';
import Post from '../Post';
import Stories from '../Stories';

const data = [
    { 
        user: {
            imageUri: 'https://cdn.profoto.com/cdn/053149e/contentassets/d39349344d004f9b8963df1551f24bf4/profoto-albert-watson-steve-jobs-pinned-image-original.jpg?width=1280&quality=75&format=jpg',
            name: 'Ambani'
        },
        imageUri: 'https://cdn.profoto.com/cdn/053149e/contentassets/d39349344d004f9b8963df1551f24bf4/profoto-albert-watson-steve-jobs-pinned-image-original.jpg?width=1280&quality=75&format=jpg',
        caption: 'Business Man',
        likesCount: 0,
        postedAt: '6 minutes ago',
    },     
    { 
        user: {
            imageUri: 'https://cdn.profoto.com/cdn/053149e/contentassets/d39349344d004f9b8963df1551f24bf4/profoto-albert-watson-steve-jobs-pinned-image-original.jpg?width=1280&quality=75&format=jpg',
            name: 'Ambani'
        },
        imageUri: 'https://cdn.profoto.com/cdn/053149e/contentassets/d39349344d004f9b8963df1551f24bf4/profoto-albert-watson-steve-jobs-pinned-image-original.jpg?width=1280&quality=75&format=jpg',
        caption: 'Business Man',
        likesCount: 234,
        postedAt: '6 minutes ago',
    },     
    {  
        user: { 
            imageUri: 'https://cdn.profoto.com/cdn/053149e/contentassets/d39349344d004f9b8963df1551f24bf4/profoto-albert-watson-steve-jobs-pinned-image-original.jpg?width=1280&quality=75&format=jpg',
            name: 'Ambani'
        },
        imageUri: 'https://cdn.profoto.com/cdn/053149e/contentassets/d39349344d004f9b8963df1551f24bf4/profoto-albert-watson-steve-jobs-pinned-image-original.jpg?width=1280&quality=75&format=jpg',
        caption: 'Business Man',
        likesCount: 234,
        postedAt: '6 minutes ago',
    }

]

const Feed = () => { 
  return (
    <FlatList
      data={data}
      renderItem={({item}) => <Post post={item} />}
      ListHeaderComponent={Stories}
    />
  );
}

export default Feed;