import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Header extends Component{
    render() {
        return (
            <View style= { styles.header }>
                <Text style= { styles.text }>{this.props.title}</Text>
            </View>
        );
    }
}

const styles = {
    header: {
        padding: 20,
        alignItems: 'center',
        backgroundColor: '#1E90FF'
    },
    text: {
        fontSize: 30,
        color: '#FFFFFF'
    }
}

export default Header;
