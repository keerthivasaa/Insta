import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        margin: 5,
    },
    iconsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5
    },
    left: {
        flexDirection: 'row',
        width: 115,
        justifyContent: 'space-between',
    }, 
    likes: {
        margin: 3,
        fontWeight: 'bold',
    }, 
    caption: {
        margin: 3,
    },
    postedAt: {
        color: '#8c8c8c',
        margin: 3,
    }
});

export default styles;