'use strict';

import React, { Animated, View, Text, TouchableHighlight } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from '../styles/collapsible'

class BarCollapsible extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fadeAnim: new Animated.Value(0),
            icon: 'angle-right',
            onPressed: null,
            title: '',
            children: null,
            show: false
        };
    }

    componentDidMount() {
        if (this.props.clickable) {
            this.setState({
                icon: this.props.icon,
                onPressed: this.props.onPressed,
                title: this.props.title
            });
        } else if (this.props.collapsible) {
            Animated.timing(
                this.state.fadeAnim,
                { toValue: 1 }
            ).start();

            this.setState({
                icon: this.props.iconActive || 'plus',
                iconActive: this.props.iconActive || 'plus',
                iconInactive: this.props.iconInactive || 'minus',
                title: this.props.title
            });
        } else {
            this.setState({
                title: this.props.title
            });
        }

        this._tintColor = this.props.tintColor || '#FFF';
        this._iconSize = this.props.iconSize || 30;
    }

    render() {

        if (this.props.clickable) {
            return this._renderClickable();
        } else if (this.props.collapsible) {
            return this._renderCollapsible();
        } else {
            return this._renderDefault();
        }
    }

    _renderDefault() {
        return (
            <View style={styles.headerBar}>
                <Text style={styles.title}>{this.state.title}</Text>
            </View>
        );
    }

    _renderClickable() {
        return (
            <TouchableHighlight style={styles.headerBarWrapper} underlayColor='transparent' onPress={this.state.onPressed}>
                <View style={styles.headerBar}>
                    <Text style={styles.title}>{this.state.title}</Text>
                    <Icon name={this.state.icon} size={this._iconSize} color={this._tintColor} style={styles.icon}/>
                </View>
            </TouchableHighlight>
        );
    }

    _renderCollapsible() {
        return (
            <View>
                <TouchableHighlight style={styles.headerBarWrapper} underlayColor='transparent' onPress={() => { this._toggleView()}}>
                    <View style={styles.headerBar}>
                        <Text style={styles.title}>{this.state.title}</Text>
                        <Icon name={this.state.icon} size={this._iconSize} color={this._tintColor} style={styles.icon}/>
                    </View>
                </TouchableHighlight>
                { this.state.show &&  <Animated.View
                    style={{opacity: this.state.fadeAnim}}>
                    {this.props.children}
                </Animated.View> }
            </View>
        );
    }

    _toggleView() {
        this.setState({
            show: !this.state.show,
            icon: this.state.show ? this.state.iconActive : this.state.iconInactive
        });
    }
}

module.exports = BarCollapsible;
