import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';


class LoginForm extends React.Component {
    render() {
        const { handleSubmit, handleFormSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <Field component="input" type="text" name="username" />
                <Field component="input" type="password" name="password" />
                <input type="submit" value="Login" />
            </form>
        );
    }
}
LoginForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleFormSubmit: PropTypes.func.isRequired
};
export default LoginForm;
