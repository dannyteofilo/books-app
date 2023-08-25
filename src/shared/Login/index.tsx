import { useForm } from "../../hooks/useForms";
import { FormErrors, FormValues } from "../../interfaces/forms";
import { initialValues, fieldInfo } from "../../constants/formRegisterConfig";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";

const Login = () => {
  const { login } = useAuth();
  const requiredFields: (keyof FormValues)[] = ["email", "password"];
  const navigate = useNavigate();

  const validate = (values: FormValues): FormErrors => {
    const errors: FormErrors = {};

    for (const field of requiredFields) {
      if (!values[field]) {
        errors[field] = `${fieldInfo[field].placeholder} is required`;
      }
    }

    return errors;
  };

  const handleSubmit = (values: any) => {
    console.log("Login submitted with values:", values);
    login()
    navigate("/")
  };

  const {
    values,
    errors,
    handleChange,
    handleSubmit: handleFormSubmit,
    handleBlur,
  } = useForm(initialValues, validate, handleSubmit);

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleFormSubmit}>
        {requiredFields.map((field) => (
          <div key={field}>
            <label htmlFor={field}>{fieldInfo[field].placeholder}</label>
            <input
              id={field}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values[field]}
              name={field}
              type={fieldInfo[field].type}
              placeholder={fieldInfo[field].placeholder}
            />
            {errors[field] && <p>{errors[field]}</p>}
          </div>
        ))}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
