import ProfilePicture from "../components/ProfilePicture";
import RegisterForm from "../components/RegisterForm";
import "../styles/Register.css";

function Register() {
  return (
    <div className="register">
      <h1 className="title-register">Inscription</h1>
      <ProfilePicture />
      <RegisterForm />
    </div>
  );
}

export default Register;
