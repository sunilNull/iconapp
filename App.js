import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MyIcons from './data/MyIcons';

const MyIcon = props => {
    return (
        <View style={styles.iconView}>
            <View style={{ paddingHorizontal: 10 }}>
                <Ionicons name={props.icon} size={30} color="black" />
            </View>
            <Text style={styles.iconText}>{props.icon}</Text>
        </View>
    );
};

const App = () => {
    return (
        <View style={styles.container}>
            <FlatList
                keyExtractor={(item, index) => index}
                data={MyIcons}
                renderItem={(iconItem) => (
                    <MyIcon icon={iconItem.item} />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconView: {
        paddingVertical: 10,
        flexDirection: 'row',
        width: "95%",
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        margin: 10,
    },
    iconText: {
        color: 'black',
        fontSize: 20,
        fontWeight: '400',
    }
})

export default App;