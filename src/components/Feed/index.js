import React, { useEffect, useState } from 'react';
import {
    FlatList,
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    Image,
    Pressable
} from 'react-native';
import Post from '../Post';
import Stories from '../Stories';

const Feed = () => {

    const [data, setData] = useState(null)

    useEffect(() => {
        getListApi();
    }, [])

    const getListApi = async () => {
        await fetch("https://hiit.ria.rocks/videos_api/cdn/com.rstream.crafts?versionCode=40&lurl=Canvas%20painting%20ideas", {
            method: 'GET',
        })
            .then(result => result.json())
            .then(result => setData(result))
            .catch(error => console.log('error', error))
    }

    renderItem = ({ item }) => {
        return (
            <View style={styles.wrapText}>
                <Text>{item.title}</Text>
                <Text>{item.channelname}</Text>
                <Image source={{uri: item.highthumbnail}} />
                <Image source={{uri: item.lowthumbnail}} />
                <Image source={{uri: item.mediumthumbnail}} />
            </View>
        )
    }

    return (
        <SafeAreaView>
            <FlatList
                data={data}
                renderItem={({ item }) => <Post post={item} />}
                ListHeaderComponent={Stories}
            />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    fontSize: {
        fontSize: 18,
        color: 'black'
    },
    wrapText: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'center',

    },
    item: {
        flexDirection: 'row',
        marginBottom: 20,
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
            height: 10
        },
        shadowOpacity: 0.3,
        shadowRadius: 20,
        padding: 10,
    },
    image: {
        width: 100,
        height: 100
    }
})

export default Feed;