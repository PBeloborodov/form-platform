import React from "react";
import { AddPlatformForm } from "./components/AddPlatformForm";
import { AddAppForm } from "./components/add-app-form";
import { AppDisplay } from "./components/AppDisplay";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <AddPlatformForm />
      <AddAppForm />
      <AppDisplay />
    </div>
  );
};

export default App;
