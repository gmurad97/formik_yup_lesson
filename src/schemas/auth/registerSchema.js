import * as Yup from "yup";

const registerSchema = Yup.object().shape({
    first_name: Yup.string().required("First name is required."),
    last_name: Yup.string().required("Last name is required."),
    email: Yup.string().email("Invalid email address.").required("Email is required."),
    username: Yup.string().required("Username cannot be empty."),
    password: Yup.string()
        .required("Password is required.")
        .min(8, "Password must be at least 8 characters long.")
        .matches(/[a-z]/, "Password must contain at least one lowercase letter.")
        .matches(/[A-Z]/, "Password must contain at least one uppercase letter.")
        .matches(/[0-9]/, "Password must contain at least one number."),
    confirm_password: Yup.string()
        .required("Confirm password is required.")
        .oneOf([Yup.ref('password')], "Passwords must match."),
    terms: Yup.boolean()
        .oneOf([true], "Please accept the terms.")

});

export default registerSchema;