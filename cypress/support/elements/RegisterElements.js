class RegisterElements {
    inputRegister = () => {
        return '#reg_username';
    }
    inputEmail = () => {
        return '#reg_email';
    }
    inputPassword = () => {
        return '#reg_password';
    }
    btnRegister = () => {
        return '.woocommerce-form-register__submit'
    }
    errorMessage = () => {
        return 'Error: An account is already registered with your email address. Please log in.'
    }
}

export default RegisterElements;