class LoginElements {
    inputLoginUser = () => {
        return '#username';
    }
    inputLoginPassword = () => {
        return '#password';
    }
    btnLogin = () => {
        return '.woocommerce-form-login__submit'
    }
    messageLogin = () => {
        return 'From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.'
    }
}

export default LoginElements;