import { Dimensions, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

type CardColorProps = {
    onPress: () => string
}

type CardColorState = {
    color: string
}

export default class CardColor extends React.Component<CardColorProps, CardColorState> {
    state = {
        color: "#" + Math.floor(Math.random()*16777215).toString(16)
    }

    constructor(props: CardColorProps) {
        super(props);
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

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('screen').width * 0.25,
        width: Dimensions.get('screen').width * 0.25
    }
});
