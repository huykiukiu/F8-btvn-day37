import React from "react";
import { useNavigate } from "react-router-dom";
import { useWizardForm } from "../stores/wizardFormStore";

export default function Step4() {
  const navigate = useNavigate();
  const { step1Data, step2Data } = useWizardForm();
  return (
    <form className="bg-[#1D232A] text-white max-w-200 mx-auto mt-30">
      <h1 className="text-2xl font-bold mb-5">Congratulations!</h1>
      <p className="mb-5">You did it a ! 🎉</p>
      <p className="mb-5">Here's your input:</p>
      <pre className="text-white bg-black">
        {`
        {
            "firstName": "${step1Data.firstName}",
            "lastName": "${step1Data.lastName}",
            "age": "${step1Data.age}",
            "email": "${step1Data.email}",
            "username": "${step2Data.username}"
        }
        `}
      </pre>
      <div className="flex justify-around mt-10">
        <button
          type="button"
          className="bg-blue-500 text-white border px-3 py-2 cursor-pointer rounded-md"
          onClick={() => navigate("/step3")}
        >
          Previous
        </button>
        <button
          disabled={true}
          type="submit"
          className="bg-[#364153] border px-3 py-2 cursor-pointer rounded-md"
        >
          Next
        </button>
      </div>
    </form>
  );
}
