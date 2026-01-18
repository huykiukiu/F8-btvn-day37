import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { step1Schema } from "../schema/wizardFormSchema";
import { useNavigate } from "react-router-dom";
import { useWizardForm } from "../stores/wizardFormStore";
export default function Step1() {
  const { step1Data, updateStep1 } = useWizardForm();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(step1Schema),
    defaultValues: step1Data,
    mode: "onChange",
  });
  const onSubmit = (data) => {
    console.log(data);
    updateStep1(data);
    navigate("/step2");
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-[#1D232A] text-white max-w-200 mx-auto mt-30"
    >
      <h1 className="text-2xl font-bold">Contact Info</h1>
      <div className="flex gap-20 mt-5">
        <div className="flex flex-col gap-2 flex-1">
          <label className="block">First Name</label>
          <input
            type="text"
            className="bg-[#364153] border w-full px-3 rounded-md h-10"
            placeholder="e.g John"
            {...register("firstName")}
          />
          {errors.firstName?.message && (
            <span className="text-red-500">{errors.firstName.message}</span>
          )}
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <label className="block">Last Name</label>
          <input
            type="text"
            className="bg-[#364153] border w-full px-3 rounded-md h-10"
            placeholder="e.g Doe"
            {...register("lastName")}
          />
          {errors.lastName?.message && (
            <span className="text-red-500">{errors.lastName.message}</span>
          )}
        </div>
      </div>
      <div className="flex gap-20 mt-5">
        <div className="flex flex-col gap-2 flex-1">
          <label className="block">Age</label>
          <input
            type="number"
            className="bg-[#364153] border w-full px-3 rounded-md h-10"
            placeholder="e.g 18"
            {...register("age")}
          />
          {errors.age?.message && (
            <span className="text-red-500">{errors.age.message}</span>
          )}
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <label className="block">Email</label>
          <input
            type="email"
            className="bg-[#364153] border w-full px-3 rounded-md h-10"
            placeholder="e.g John@gmail.com"
            {...register("email")}
          />
          {errors.email?.message && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
        </div>
      </div>
      <div className="flex justify-around mt-10">
        <button
          type="button"
          className="bg-[#364153] border px-3 py-2 cursor-pointer rounded-md"
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
