import React, { Component } from 'React';
import { connect } from 'react-redux';
import { themeType } from '../../../services/themes';
import styles from './styles.scss';

class Theme extends Component {

    render() {

        const theme = (this.props.themeType === themeType.dark) 
                            ? styles.rootDarkTheme : styles.rootDefaultTheme;

        document.getElementsByTagName('body')[0].setAttribute('class', theme);

        return(
            <div>
                {this.props.children}
            </div>
        );

    }
}

export default Theme;