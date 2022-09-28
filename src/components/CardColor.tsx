import { Dimensions, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';

type CardColorProps = {
    asyncStorageKey: string;
    onPress: () => string;
}

type CardColorState = {
    color: string
}

export default class CardColor extends React.Component<CardColorProps, CardColorState> {
    state = {
        color: null
    }

    constructor(props: CardColorProps) {
        super(props);
    }

    componentDidMount(): void {
        // getData(this.props.asyncStorageKey, this.setState)

        AsyncStorage.getItem('@' + this.props.asyncStorageKey).then( (color) => {
            console.log('@' + this.props.asyncStorageKey + ' COLOR', color);
            this.setState({ color: color })
        })

    }

    componentWillUnmount(): void {
        storeData(this.props.asyncStorageKey, this.state.color)
    }

    changeColor = () => {
        this.setState({ color: this.props.onPress() })
    }

    render() {
        return (
            <TouchableOpacity onPress={ this.changeColor } style= {  {...styles.container,  backgroundColor: this.state.color} } >
            </TouchableOpacity>
        );
    }
}

const storeData = async (key: string, value: string) => {
    try {
      await AsyncStorage.setItem('@' + key, value)
    } catch (e) {
    }
}

const getData = async (key: string, setState: (state: CardColorState) => void) => {
    try {
      const color = await AsyncStorage.getItem('@' + key)
      console.log(key + ' COLOR', color);
      setState({ color: color })
    } catch(e) {
    }
}

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('screen').width * 0.25,
        width: Dimensions.get('screen').width * 0.25
    }
});
