import "./Register.css";
import { useFormik } from "formik";
import registerSchema from "../../schemas/auth/registerSchema.js";

const Register = () => {

    const handleFormSubmit = (values, action) => {
        setTimeout(() => {
            action.resetForm();
        }, 2048);
    }

    const { errors, values, handleChange, handleSubmit } = useFormik({
        initialValues: {
            first_name: "",
            last_name: "",
            email: "",
            username: "",
            password: "",
            confirm_password: "",
            terms: false
        },
        validationSchema: registerSchema,
        validateOnChange: false,
        validateOnBlur: false,
        onSubmit: handleFormSubmit
    });

    return (
        <article className="register__form">
            <form onSubmit={handleSubmit}>
                <div className="form__group">
                    <label htmlFor="first_name">
                        First Name
                        {errors.first_name && (
                            <span className="error__text">*{errors.first_name}</span>
                        )}
                    </label>
                    <input type="text" id="first_name" onChange={handleChange} value={values.first_name} />
                </div>
                <div className="form__group">
                    <label htmlFor="last_name">
                        Last Name
                        {errors.last_name && (
                            <span className="error__text">*{errors.last_name}</span>
                        )}
                    </label>
                    <input type="text" id="last_name" onChange={handleChange} value={values.last_name} />
                </div>
                <div className="form__group">
                    <label htmlFor="email">
                        Email
                        {errors.email && (
                            <span className="error__text">*{errors.email}</span>
                        )}
                    </label>
                    <input type="text" id="email" onChange={handleChange} value={values.email} />
                </div>
                <div className="form__group">
                    <label htmlFor="username">
                        Username
                        {errors.username && (
                            <span className="error__text">*{errors.username}</span>
                        )}
                    </label>
                    <input type="text" id="username" onChange={handleChange} value={values.username} />
                </div>
                <div className="form__group">
                    <label htmlFor="password">
                        Password
                        {errors.password && (
                            <span className="error__text">*{errors.password}</span>
                        )}
                    </label>
                    <input type="password" id="password" onChange={handleChange} value={values.password} />
                </div>
                <div className="form__group">
                    <label htmlFor="confirm_password">
                        Confirm Password
                        {errors.confirm_password && (
                            <span className="error__text">*{errors.confirm_password}</span>
                        )}
                    </label>
                    <input type="password" id="confirm_password" onChange={handleChange} value={values.confirm_password} />
                </div>
                <div className="form__group">
                    <label htmlFor="terms">
                        Terms
                        <input type="checkbox" id="terms" onChange={handleChange} value={values.terms} />
                    </label>
                    {errors.terms && (
                        <span className="error__text">*{errors.terms}</span>
                    )}
                </div>
                <div className="form__group">
                    <button type="submit">Register</button>
                </div>
            </form>
        </article>
    );
}

export default Register;