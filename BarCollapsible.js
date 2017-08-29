'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { 
    Animated, 
    View, 
    Text, 
    TouchableHighlight 
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style'

class BarCollapsible extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fadeAnim: new Animated.Value(0),
            icon: props.icon,
            onPressed: null,
            title: '',
            children: null,
            show: props.showOnStart
        };
    }

    static propTypes = {
        style: View.propTypes.style,
        titleStyle: Text.propTypes.style,
        tintColor: PropTypes.string,
    }

    static defaultProps = {
        showOnStart: false,
        icon: 'angle-right',
        iconOpened: 'minus',
        iconActive: 'plus',
        iconCollapsed: 'plus',
        tintColor: '#fff',
        iconSize: 30
    }

    componentWillMount() {
        const {
            collapsible, 
            clickable, 
            icon,
            title,
            tintColor,
            iconSize, 
            iconOpened,
            iconActive,
            iconCollapsed,
            showOnStart,
            onPressed
        } = this.props;
        const {fadeAnim} = this.state;

        if (clickable) {
            this.setState({
                icon,
                onPressed,
                title
            });
        } else if (collapsible) {
            this.setState({
                icon: showOnStart ? iconOpened : iconActive,
                iconCollapsed,
                iconOpened,
                title
            }, Animated.timing(fadeAnim, { toValue: 1 }).start());
        } else {
            this.setState({title});
        }

    }

    toggleView = () => {
        const {show, iconCollapsed, iconOpened} = this.state;

        this.setState({
            show: !show,
            icon: show ? iconCollapsed : iconOpened
        });
    }

    renderDefault = () => {
        const {titleStyle} = this.props;
        const {title} = this.state;

        return (
            <View style={styles.bar}>
                <Text style={[styles.title, titleStyle]}>
                    {title}
                </Text>
            </View>
        );
    }

    renderCollapsible = () => {
        const {
            style, 
            iconStyle,
            titleStyle, 
            tintColor, 
            iconSize, 
            children
        } = this.props;
        const {icon, fadeAnim, title} = this.state;

        return (
            <View>
                <TouchableHighlight 
                    style={styles.barWrapper} 
                    underlayColor='transparent' 
                    onPress={this.toggleView}
                >
                    <View style={[styles.bar, style]}>
                        <Text style={[styles.title, titleStyle]}>
                            {title}
                        </Text>
                        <Icon 
                            name={icon} 
                            size={iconSize} 
                            color={tintColor} 
                            style={[styles.icon, iconStyle]}
                        />
                    </View>
                </TouchableHighlight>
                { this.state.show &&  
                    <Animated.View
                        style={{opacity: fadeAnim}}
                    >
                        {children}
                    </Animated.View> 
                }
            </View>
        );
    }

    renderClickable = () => {
        const {
            style, 
            titleStyle, 
            tintColor, 
            iconSize, 
            iconStyle
        } = this.props;
        const {icon, title, onPressed} = this.state;

        return (
            <TouchableHighlight 
                style={styles.barWrapper} 
                underlayColor='transparent' 
                onPress={onPressed}
            >
                <View style={[styles.bar, style]}>
                    <Text style={[styles.title, titleStyle]}>
                        {title}
                    </Text>
                    <Icon 
                        name={icon} 
                        size={iconSize} 
                        color={tintColor} 
                        style={[styles.icon, iconStyle]}
                    />
                </View>
            </TouchableHighlight>
        );
    }

    render() {
        const {clickable, collapsible} = this.props;

        if (clickable) {
            return this.renderClickable();
        } else if (collapsible) {
            return this.renderCollapsible();
        } else {
            return this.renderDefault();
        }
    }

}

export default BarCollapsible;