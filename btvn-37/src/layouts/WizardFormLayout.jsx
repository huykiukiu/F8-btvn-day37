import { Outlet } from "react-router-dom";

export default function WizardFormLayout() {
  return (
    <div className="bg-[#1D232A] text-white h-screen">
      <div className="flex justify-between">
        <h1 className="text-3xl">Wizard form</h1>
        <p className="text-xl">Step:</p>
      </div>
      <hr />
      <Outlet />
    </div>
  );
}
