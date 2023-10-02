import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import { mensajesLogin } from './mensajes/mensajesLogin';
function Login() {
  const intl = useIntl();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [step, setStep] = useState(1);
  const [submittedEmail, setSubmittedEmail] = useState('');
  const currentLocale = 'es';

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleStep1Next = () => {
    setSubmittedEmail(email);
    setStep(2);
  };

  const handleStep2Submit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login-container">
      {step === 1 && (
        <div className="login-step">
          <h2>{intl.formatMessage(mensajesLogin.loginHeader, { locale: currentLocale })}</h2>
          <p>{intl.formatMessage(mensajesLogin.loginInstructions, { locale: currentLocale })}</p>
          <form onSubmit={handleStep1Next}>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder={intl.formatMessage(mensajesLogin.emailPlaceholder, { locale: currentLocale })}
              required
            />
            <div className="forgot-link">
              <a href="#">{intl.formatMessage(mensajesLogin.forgotEmail, { locale: currentLocale })}</a>
            </div>
            <div className="btn-container">
              <a className="create-account-link" href="#">
                {intl.formatMessage(mensajesLogin.createAccount, { locale: currentLocale })}
              </a>
              <button type="submit">{intl.formatMessage(mensajesLogin.nextButton, { locale: currentLocale })}</button>
            </div>
          </form>
          <p>{error}</p>
        </div>
      )}

      {step === 2 && (
        <div className="login-step">
        <h2>{submittedEmail}</h2>
          <form onSubmit={handleStep2Submit}>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={handlePasswordChange}
              placeholder={intl.formatMessage(mensajesLogin.passwordPlaceholder, { locale: currentLocale })}
              required
            />
            <div className="password-checkbox">
              <input
                type="checkbox"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
              />
              <label>{intl.formatMessage(mensajesLogin.showPasswordLabel, { locale: currentLocale })}</label>
            </div>
            <div className="btn-container">
              <button type="submit">{intl.formatMessage(mensajesLogin.submitButton, { locale: currentLocale })}</button>
            </div>
          </form>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}

export default Login;
