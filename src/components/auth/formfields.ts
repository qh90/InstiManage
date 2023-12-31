import { InputField } from "../../lib/type"

const loginFields: InputField[] = [
    {
        labelText: "Email address",
        labelFor: "email-address",
        id: "email",
        name: "email",
        type: "email",
        autoComplete: "email",
        isRequired: true,
        placeholder: "Email address"   
    },
    {
        labelText: "Password",
        labelFor: "password",
        id: "password",
        name: "password",
        type: "password",
        autoComplete: "current-password",
        isRequired: true,
        placeholder: "Password"   
    }
];

const signupFields: InputField[] = [
    {
        labelText: "Username",
        labelFor: "username",
        id: "username",
        name: "username",
        type: "text",
        autoComplete: "username",
        isRequired: true,
        placeholder: "Username"   
    },
    {
        labelText: "Email address",
        labelFor: "email_address",
        id: "email",
        name: "email",
        type: "email",
        autoComplete: "email",
        isRequired: true,
        placeholder: "Email address"   
    },
    {
        labelText: "Password",
        labelFor: "password",
        id: "password",
        name: "password",
        type: "password",
        autoComplete: "current-password",
        isRequired: true,
        placeholder: "Password"   
    },
    {
        labelText: "Confirm Password",
        labelFor: "confirm-password",
        id: "confirm_password",
        name: "confirm-password",
        type: "password",
        autoComplete: "confirm_password",
        isRequired: true,
        placeholder: "Confirm Password"   
    }
]

export {loginFields,signupFields}