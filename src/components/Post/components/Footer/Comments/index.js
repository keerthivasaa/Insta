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
import Post from '../../../../Post';

const Comments = () => {

    const [data, setData] = useState(null)

    useEffect(() => {
        getListApi();
    }, [])

    const getListApi = async () => {
        await fetch("http://cookbookrecipes.in/test.php", {
            method: 'GET',
        })
            // .then(result => result.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error))
    }

    renderItem = ({ item }) => {
        return (
            <View style={styles.wrapText}>
                <Text>{item.username}</Text>
                <Text>{item.comments}</Text>
            </View>
        )
    }
console.log(data);
    return (
        <SafeAreaView>
            <FlatList
                data={data}
                renderItem={({ item }) => <Post post={item} />}
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

export default Comments;