import AuthForm from "./AuthForm";

const RegisterPage = () => {
  return (
    <div className="min-w-full min-h-full flex justify-center items-center">
      <AuthForm title="Register" link="login" linkTextPrefix="Already have an account?" linkText="Login" />
    </div>
  );
};

export default RegisterPage;
