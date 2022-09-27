import { View, Text,  TouchableOpacity, ViewStyle, TextStyle, ImageStyle } from 'react-native';
import React from 'react';

type CardColorProps = {
    onPress: () => ViewStyle | TextStyle | ImageStyle
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

    componentDidMount(): void {}

    componentWillUnmount(): void {}

    changeColor = () => {
        const { color } = this.state
        const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        console.log('RANDOM COLOR', randomColor);
        this.setState({ color: randomColor })
    }

    render() {
        const { onPress } = this.props
        return (
            <TouchableOpacity onPress={ this.changeColor }>
                <View style= {  { height: 50, width: 50, backgroundColor: this.state.color} }>
                    <Text>{this.state.color}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}
