/**
 * Created by saionara1 on 6/21/17.
 */
import React, {
    Component
} from "react";
import {
    connect,
    Provider
} from "react-redux";
import {
    StackNavigator
} from "react-navigation";

import Routes from './Router'

const Navigator = StackNavigator(Routes, {
    headerMode: 'screen'
});

export class AppNavigator extends Component {
    render() {
        return ( <
            Navigator / >
        );
    }
}

function mapStateToProps(state) {
    return {
        login: state.login
    }
}
export default connect(mapStateToProps)(AppNavigator);