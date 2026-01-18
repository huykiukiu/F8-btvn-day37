import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
export default function Step3() {
  const ref = useRef();
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    ref.current.innerText = "Loading...";
    setTimeout(() => {
      navigate("/step4");
    }, 2000);
  };
  return (
    <form
      onSubmit={onSubmit}
      className="bg-[#1D232A] text-white max-w-200 mx-auto mt-30"
    >
      <h1 className="text-2xl font-bold mb-5">Async</h1>
      <p className="mb-5">
        Pressing "Next" does async operation that takes 2 seconds before we
        proceed to the next step.
      </p>
      <div className="flex justify-around mt-10">
        <button
          type="button"
          className="bg-[#364153] border px-3 py-2 cursor-pointer rounded-md"
          onClick={() => navigate("/step2")}
        >
          Previous
        </button>
        <button
          type="submit"
          className="bg-[#364153] border px-3 py-2 cursor-pointer rounded-md"
          ref={ref}
        >
          Next
        </button>
      </div>
    </form>
  );
}
