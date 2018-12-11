import Config from 'react-native-config';

export default {
  API: {
    BASE: Config.BASE_URL,
    // SIGN UP
    REGISTER: { method: 'post', url: 'user/register' },
    VALIDATE_USER_INFO: { method: 'post', url: 'user/register/validate' },
    RESEND_EMAIL_CODE: { method: 'post', url: 'user/resent/mail-activate' },
    RESEND_PHONE_CODE: { method: 'post', url: 'user/resent/sms' },
    SIGN_UP_CONFIRM: { method: 'post', url: 'user/activate' },
    SEND_EMAIL_PHONE_CODE: { method: 'post', url: 'user/sent/mail-sms' },
    // Login
    LOGIN: { method: 'post', url: 'user/login' },
    SEND_CODE_SIGN: { method: 'post', url: 'user/sent/code-signin' },
    RESEND_EMAIL_CODE_SIGN: { method: 'post', url: 'user/sent/mail-signin' },
    RESEND_PHONE_CODE_SIGN: { method: 'post', url: 'user/sent/sms-signin' },
    VALIDATE_CODE_SIGN: { method: 'post', url: 'user/login/biometric' },
    // Passphrase
    VALIDATE_PASSPHRASE: { method: 'post', url: 'user/check-passphrase' },
    // Dashboard
    UPDATE_DASHBOARD_DATA: { method: 'get', url: 'dashboard?lang={lang}' },
    // Deposit
    GET_DEPOSIT_DATA: { method: 'get', url: 'deposit?lang={lang}' },
    GET_DEPOSIT_DETAIL: { method: 'get', url: 'deposit/{id}?lang={lang}' },
    // Withdraw
    WITH_DRAW_DATA: { method: 'get', url: 'withdraw?lang={lang}' },
    WITHDRAW_TRANSACTION: { method: 'post', url: 'withdraw' },
    GET_WITHDRAW_DETAIL: { method: 'get', url: 'withdraw/{id}?lang={lang}' },
    VALIDATE_WITHDRAW_INFO: { method: 'post', url: 'withdraw/check-validate' },
    //LOGOUT
    LOGOUT: { method: 'post', url: 'user/logout' },
    //RESET password
    REQUEST_RESET_PASSWORD: { method: 'post', url: 'user/reset-password' },
    // Profile
    GET_PROFILE: { method: 'get', url: 'user/me?lang={lang}' },
    UPDATE_PROFILE: { method: 'put', url: 'user/me' },
    // CHANGE PASS
    CHANGE_PASS: { method: 'post', url: 'user/change-password' },
    // app setting
    APP_SETTING: { method: 'get', url: 'setting?lang={lang}' },
    // account activation
    ACCOUNT_ACTIVATION: { method: 'post', url: 'user/verify' },
  }
};
