import {useState} from 'react';
import "./SignupPage.css";
import SignupSummary from './SignupSummary';

const greeting = {
  en: "Hello",
  fi: "Moi",
  de: "Hallo",
  fr: "Bonjour",
};

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nationality, setNationality] = useState("en");

  function handleEmailChange(event) { 
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleConfirmPasswordChange(event) {
    setConfirmPassword(event.target.value);
  }

  function handleNationalityChange(event) {
    setNationality(event.target.value);
  } 

  function handleSubmit(event) {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log({ email, password, nationality });

    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setNationality("en");
  } 

  return (
    <div className="signup-page">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="nationality">Nationality:</label>
          <select
            id="nationality"
            value={nationality}
            onChange={handleNationalityChange}
          >
            <option value="en">English</option>
            <option value="fi">Finnish</option>
            <option value="de">German</option>
            <option value="fr">French</option>
          </select>
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <SignupSummary greeting={greeting[nationality]} email={email} nationality={nationality} />
    </div>
  )
}

export default SignupPage

