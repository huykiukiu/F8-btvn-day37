import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useWizardForm } from "../stores/wizardFormStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { step2Schema } from "../schema/wizardFormSchema";
export default function Step2() {
  const { step1Data, updateStep2, step2Data } = useWizardForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(step2Schema(step1Data.firstName)),
    defaultValues: step2Data,
    mode: "onChange",
  });
  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data);
    updateStep2(data);
    navigate("/step3");
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-[#1D232A] text-white max-w-200 mx-auto mt-30"
    >
      <h1 className="text-2xl font-bold mb-5">Username</h1>
      <p className="mb-5">
        Username should include your first name. This step is to demonstrate
        that we can validate field based on what user typed in the previous
        step.
      </p>
      <div className="mb-5">
        <label className="block">Username</label>
        <input
          type="text"
          className="bg-[#364153] border w-full px-2 h-10 rounded-md"
          placeholder="Nhập username..."
          {...register("username")}
        />
        {errors.username?.message && (
          <span className="text-red-500">{errors.username.message}</span>
        )}
      </div>
      <div className="flex justify-around mt-10">
        <button
          type="button"
          className="bg-[#364153] border px-3 py-2 cursor-pointer rounded-md"
          onClick={() => navigate("/")}
        >
          Previous
        </button>
        <button
          type="submit"
          className="bg-[#364153] border px-3 py-2 cursor-pointer rounded-md"
        >
          Next
        </button>
      </div>
    </form>
  );
}
