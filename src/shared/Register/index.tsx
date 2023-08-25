import { useForm } from "../../hooks/useForms";
import { FormErrors, FormValues } from "../../interfaces/forms";
import {
  initialValues,
  requiredFields,
  fieldInfo,
} from "../../constants/formRegisterConfig";

import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const validate = (values: FormValues): FormErrors => {
    const errors: FormErrors = {};

    for (const field of requiredFields) {
      if (!values[field]) {
        errors[field] = `${field} is required`;
      }
    }

    return errors;
  };

  const handleSubmit = (values: any) => {
    console.log("Form submitted with values:", values);
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
    <div>
      <h1>Register</h1>
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
