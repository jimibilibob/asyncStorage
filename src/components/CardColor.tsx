import { View, TouchableOpacity } from 'react-native';
import React from 'react';

type CardColorProps = {
    onPress: () => string
}

type CardColorState = {
    color: string
}

export default class CardColor extends React.Component<CardColorProps, CardColorState> {
    state = {
        color: 'red'
    }

    constructor(props: CardColorProps) {
        super(props);
    }

    changeColor = () => {
        this.setState({ color: this.props.onPress() })
    }

    render() {
        return (
            <TouchableOpacity onPress={ this.changeColor } style= {  { height: '20%', width: '25%', backgroundColor: this.state.color} } >
            </TouchableOpacity>
        );
    }
}
