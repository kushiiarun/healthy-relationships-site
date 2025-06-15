import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function LandingPage() {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Healthy Relationships</h1>
      <p>Learn about healthy friendships, how to care for your mental health, and more.</p>
      <div style={{ marginTop: "1rem" }}>
        <Link to="/info" style={{ marginRight: "1rem" }}>Learn More</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
}

function InfoPage() {
  return (
    <div style={{ padding: "1rem", maxWidth: "700px", margin: "auto" }}>
      <h2>What Are Relationships?</h2>
      <p>Relationships include friends, siblings, and family. They help us feel supported and improve our mental and physical health.</p>
      <h3>Healthy Relationships - BRECT</h3>
      <ul>
        <li><b>B</b>oundaries: Respect what each person is okay with</li>
        <li><b>R</b>espect: Value feelings and choices</li>
        <li><b>E</b>quality: Give and take equally</li>
        <li><b>C</b>ommunication: Share your feelings</li>
        <li><b>T</b>rust: Believe in each other</li>
      </ul>
    </div>
  );
}

function SignUpForm() {
  return (
    <div style={{ padding: "1rem", maxWidth: "500px", margin: "auto" }}>
      <h2>Sign Up for Our Course</h2>
      <form>
        <div style={{ marginBottom: "0.5rem" }}>
          <input type="text" placeholder="Your Name" style={{ width: "100%" }} />
        </div>
        <div style={{ marginBottom: "0.5rem" }}>
          <input type="email" placeholder="Email" style={{ width: "100%" }} />
        </div>
        <div style={{ marginBottom: "0.5rem" }}>
          <textarea placeholder="Why are you interested?" style={{ width: "100%" }} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/signup" element={<SignUpForm />} />
      </Routes>
    </Router>
  );
}

export default App;
