import AuthForm from "./AuthForm"

const LoginPage = () => {
    return (
        <div className="min-w-full min-h-full flex justify-center items-center">
            <AuthForm title="Login" link="register" linkText="Register" />
        </div>
    )
}

export default LoginPage