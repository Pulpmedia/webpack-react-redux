import LoginFormWidget from '../components/loginForm';
import { connect } from 'react-redux';
import { reduxForm, SubmissionError } from 'redux-form';
import UserActions from '../common/actions/user';


const mapStateToProps = state => {
    return { userState: state.user };
};
const mapDispatchToProps = (dispatch) => {
    return {
        handleFormSubmit: (values) => {
            const { username, password } = values;
            const login = dispatch(UserActions.login(username, password)).catch(() => {
                throw new SubmissionError({ _error: 'Login failed!' });
            });
            return login;
        }
    };
};

const LoginForm = reduxForm({
    form: 'loginForm'
})(LoginFormWidget);

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
