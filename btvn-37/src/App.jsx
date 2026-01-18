import React from "react";
import { Route, Routes } from "react-router-dom";
import WizardFormLayout from "./layouts/WizardFormLayout";
import Step1 from "./pages/Step1";
import Step2 from "./pages/Step2";
import Step3 from "./pages/Step3";
import Step4 from "./pages/Step4";
export default function App() {
  return (
    <div>
      <Routes>
        <Route element={<WizardFormLayout />}>
          <Route index element={<Step1 />} />
          <Route path="step2" element={<Step2 />} />
          <Route path="step3" element={<Step3 />} />
          <Route path="step4" element={<Step4 />} />
        </Route>
      </Routes>
    </div>
  );
}
