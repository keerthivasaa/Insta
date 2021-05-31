import React from 'react';
import { View, FlatList } from 'react-native';
import styles from './styles';
import Story from "../Story";

const data = [
    {
        imageUri: 'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5c7d7829a7ea434b351ba0b6%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D206%26cropX2%3D2043%26cropY1%3D250%26cropY2%3D2089',
        name: 'Ambani'
    }, {
        imageUri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/1200px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg',
        name: 'Mark'
    }, {
        imageUri: 'https://cdn.profoto.com/cdn/053149e/contentassets/d39349344d004f9b8963df1551f24bf4/profoto-albert-watson-steve-jobs-pinned-image-original.jpg?width=1280&quality=75&format=jpg',
        name: 'Steve'
    }, {
        imageUri: 'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5bb22ae84bbe6f67d2e82e05%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D524%26cropX2%3D1824%26cropY1%3D185%26cropY2%3D1486',
        name: 'Jeff'
    }, {
        imageUri: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg',
        name: 'Elon'
    }

]

const Stories = () => {
    return (
        <View>
            <FlatList 
                data = {data}
                keyExtractor={({name}) => name}
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.container}
                renderItem={({item}) => <Story imageUri={item.imageUri} name={item.name}/>}
            />
        </View>
    )
}

export default Stories;