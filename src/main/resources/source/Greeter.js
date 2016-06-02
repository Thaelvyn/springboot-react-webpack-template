/**
 * Created by Thelv on 01/06/2016.
 */

import React, {Component} from 'react';
import config from './config.json';
import styles from './css/greeter.css';

class Greeter extends Component {
    
    render() {
        return (
            <div className={styles.root}>
            {config.greetText}
            </div>
        );
    };
}

export default Greeter;