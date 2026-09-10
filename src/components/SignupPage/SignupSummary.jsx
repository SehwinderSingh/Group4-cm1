function SignupSummary({ greeting, email, nationality }) {
  return (
    <div className="signup-summary">
      <h2>{greeting}</h2>
      <p> Your Email is : {email}</p>
      <p> Your Nationality is : {nationality}</p>
    </div>
  );
}

export default SignupSummary;