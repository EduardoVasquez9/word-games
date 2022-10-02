import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "../components/templates/Layout";
import HangmanScreen from "../views/hangman";
import HomeScreen from "../views/home";

export default function AppRouter() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/hangman" element={<HangmanScreen />} />
        </Routes>
      </Layout>
    </Router>
  );
}
