import { useForm } from "../../hooks/useForms";
import { FormErrors, FormValues } from "../../interfaces/forms";
import { initialValues, fieldInfo } from "../../constants/formRegisterConfig";

import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import imgLogin from "../../assets/images/login.svg";
import "./styles.css";

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
    login();
    navigate("/");
  };

  const {
    values,
    errors,
    handleChange,
    handleSubmit: handleFormSubmit,
    handleBlur,
  } = useForm(initialValues, validate, handleSubmit);

  return (
    <div className="container">
      <div className="login">
        <div className="image">
          <img src={imgLogin} alt="" className="img-login" />
        </div>
        <div className="form">
          <h1>Login</h1>
          <form onSubmit={handleFormSubmit}>
            {requiredFields.map((field) => (
              <div key={field}>
                <input
                  className="input-form"
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
            <button className="btn" type="submit">
              Login
            </button>
          </form>
          <span className="link">
            Don’t have an account yet? Register{" "}
            <Link className="here" to="/register">
              Here
            </Link>
          </span>
        </div>
      </div>
      <div className="circle"></div>
    </div>
  );
};

export default Login;
