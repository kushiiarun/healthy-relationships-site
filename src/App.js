import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function LandingPage() {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Healthy Relationships</h1>
      <p>Learn about healthy friendships, mental health, and more.</p>
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
      <p>
        Relationships include friends, siblings, and family. They help us feel supported and improve mental and physical health.
      </p>
      <h3>Healthy Relationships - BRECT</h3>
      <ul>
        <li><strong>B</strong>oundaries: Respect what each person is or isn’t comfortable with</li>
        <li><strong>R</strong>espect: Value each other’s feelings and choices</li>
        <li><strong>E</strong>quality: Give and take equally</li>
        <li><strong>C</strong>ommunication: Share your feelings and listen</li>
        <li><strong>T</strong>rust: Believe and rely on each other</li>
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
          <input type="text" placeholder="Your Name" style={{ width: "100%", padding: "0.5rem" }} />
        </div>
        <div style={{ marginBottom: "0.5rem" }}>
          <input type="email" placeholder="Email" style={{ width: "100%", padding: "0.5rem" }} />
        </div>
        <div style={{ marginBottom: "0.5rem" }}>
          <textarea placeholder="Why are you interested?" style={{ width: "100%", padding: "0.5rem" }} />
        </div>
        <button type="submit" style={{ padding: "0.5rem 1rem" }}>Submit</button>
      </form>
    </div>
  );
}

function App() {
  return (
    <Router basename="/healthy-relationships-site">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/signup" element={<SignUpForm />} />
      </Routes>
    </Router>
  );
}

export default App;
