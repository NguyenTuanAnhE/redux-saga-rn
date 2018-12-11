import { connect } from 'react-redux'
import Login from './Login'

const mapStateToProps = (state) => ({ // eslint-disable-line
});

const LoginContainer = connect(mapStateToProps, null)(Login);

export default LoginContainer