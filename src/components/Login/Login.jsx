import "./Login.css";
import { useFormik } from "formik";
import loginSchema from "../../schemas/auth/loginSchema.js";
import ReCAPTCHA from "react-google-recaptcha";
import { useRef } from "react";

const Login = () => {

    const grecaptchaRef = useRef(null);

    const onFormSubmit = (values, action) => {
        setTimeout(() => {
            action.resetForm();
            if (grecaptchaRef.current) {
                grecaptchaRef.current.reset();
            }
        }, 2048)
    }

    const { errors, values, setFieldValue, handleChange, handleSubmit } = useFormik({
        initialValues: {
            login_username_email: "",
            login_password: "",
            grecaptcha: ""
        },
        validationSchema: loginSchema,
        validateOnChange: false,
        validateOnBlur: false,
        onSubmit: onFormSubmit
    });

    const handleReCaptchaOnChange = (value) => {
        if (value.startsWith("03")) {
            console.log("grecaptcha:", value)
            setFieldValue("grecaptcha", value)
        }
    }

    return (
        <article className="register__form">
            <form onSubmit={handleSubmit}>
                <div className="form__group">
                    <label htmlFor="first_name">
                        Username or Email
                        {errors.login_username_email && (
                            <span className="error__text">*{errors.login_username_email}</span>
                        )}
                    </label>
                    <input type="text" id="login_username_email" onChange={handleChange} value={values.login_username_email} />
                </div>
                <div className="form__group">
                    <label htmlFor="first_name">
                        Password
                        {errors.login_password && (
                            <span className="error__text">*{errors.login_password}</span>
                        )}
                    </label>
                    <input type="password" id="login_password" onChange={handleChange} value={values.login_password} />
                </div>
                <div className="form__group">
                    {errors.grecaptcha && (
                        <span className="error__text">*{errors.grecaptcha}</span>
                    )}
                    <ReCAPTCHA
                        //Test site key: 6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI
                        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                        ref={grecaptchaRef}
                        onChange={handleReCaptchaOnChange}
                    />
                </div>
                <div className="form__group">
                    <button type="submit">Login</button>
                </div>
            </form>
        </article>
    );
}

export default Login;