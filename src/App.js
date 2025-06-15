import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function LandingPage() {
  return (
    <div className="p-6 flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-4xl font-bold mb-6">Healthy Relationships</h1>
      <p className="text-lg mb-6 max-w-xl">
        Learn what makes relationships healthy, why they matter for your mental health, and how to spot red and green flags in everyday life.
      </p>
      <div className="flex gap-4">
        <Button asChild>
          <Link to="/info">Learn More</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link to="/signup">Sign Up for Courses</Link>
        </Button>
      </div>
    </div>
  );
}

function InfoPage() {
  return (
    <div className="p-6 max-w-3xl mx-auto space-y-4">
      <h2 className="text-2xl font-bold">Understanding Relationships</h2>
      <p>Relationships include friends, siblings, and family. They help us feel supported and improve mental and physical health.</p>

      <h3 className="text-xl font-semibold mt-4">Mental vs Physical Health</h3>
      <p>Physical health is visible—like cuts or injuries. Mental health is how your mind feels, and issues may not be seen easily.</p>

      <h3 className="text-xl font-semibold mt-4">Why Healthy Relationships Matter</h3>
      <ul className="list-disc list-inside">
        <li>Improve mental and physical health</li>
        <li>Help you live longer</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4">Healthy Relationships - BRECT</h3>
      <ul className="list-disc list-inside">
        <li><strong>B</strong>oundaries: Respect what each person is/ isn't okay with</li>
        <li><strong>R</strong>espect: Value each other’s feelings and choices</li>
        <li><strong>E</strong>quality: Give and take equally</li>
        <li><strong>C</strong>ommunication: Share feelings honestly</li>
        <li><strong>T</strong>rust: Believe in each other</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4">Games</h3>
      <p>Play the Red Flag/Green Flag game or create skits to show healthy and unhealthy relationships in action.</p>
    </div>
  );
}

function SignUpForm() {
  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Course Sign-Up Form</h2>
      <form className="space-y-4">
        <Input placeholder="Your Name" />
        <Input placeholder="Email Address" type="email" />
        <Textarea placeholder="Why are you interested in this course?" />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}

export default function App() {
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
