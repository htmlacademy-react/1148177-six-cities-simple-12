import { useState, ChangeEvent, FormEvent } from 'react';
import { loginAction } from '../store/user-process/api-actions';
import { useAppDispatch } from '../hooks';

const LOGIN_FIELDS: Record<string, string> = {
  email: 'E-mail',
  password: 'Password',
};

type Field = {
  value: string;
  error: boolean;
  regExp: RegExp;
  errorMessage: string;
  touched: boolean;
};

function LoginForm(): JSX.Element {
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState<Record<string, Field>>({
    email: {
      value: '',
      error: false,
      regExp: /^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/,
      errorMessage: 'Incorrect Email address',
      touched: false,
    },
    password: {
      value: '',
      error: false,
      regExp: /([0-9].*[a-z])|([a-z].*[0-9])/,
      errorMessage: 'At least one letter and one number',
      touched: false,
    },
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    const isValid = formData[name].regExp.test(value);
    setFormData({
      ...formData,
      [name]: { ...formData[name], error: isValid, touched: true, value },
    });
  };

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();

    dispatch(
      loginAction({
        login: formData.email.value,
        password: formData.password.value,
      })
    );
  };

  return (
    <section className="login">
      <h1 className="login__title">Sign in</h1>

      <form
        className="login__form form"
        action="#"
        method="post"
        onSubmit={handleFormSubmit}
      >
        {Object.entries(LOGIN_FIELDS).map(([name, label]) => (
          <div key={name} className="login__input-wrapper form__input-wrapper">
            <label className="visually-hidden">{label}</label>
            <input
              className="login__input form__input"
              type={name}
              name={name}
              placeholder={label}
              onChange={handleInputChange}
              required
            />
            {!formData[name].error && formData[name].touched && (
              <div
                style={{
                  color: 'red',
                  marginTop: '-20px',
                  marginBottom: '20px',
                }}
              >
                {formData[name].errorMessage}
              </div>
            )}
          </div>
        ))}

        <button
          className="login__submit form__submit button"
          type="submit"
          disabled={!formData.email.error && !formData.password.error}
        >
          Sign in
        </button>
      </form>
    </section>
  );
}

export default LoginForm;
