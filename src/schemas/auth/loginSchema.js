import * as Yup from "yup";

const loginSchema = Yup.object().shape({
    login_username_email: Yup.string().required("Username or Email is required"),
    login_password: Yup.string()
        .required("Password is required.")
        .min(8, "Password must be at least 8 characters long.")
        .matches(/[a-z]/, "Password must contain at least one lowercase letter.")
        .matches(/[A-Z]/, "Password must contain at least one uppercase letter.")
        .matches(/[0-9]/, "Password must contain at least one number."),
    grecaptcha: Yup.string().required("Please complete the CAPTCHA")
});

export default loginSchema;