import { create } from "zustand";
export const useWizardForm = create((set) => ({
  step1Data: {},
  step2Data: null,
  step3Data: null,
  step4Data: null,
  updateStep1: (data) => {
    set({
      step1Data: data,
    });
  },
  updateStep2: (data) => {
    set({
      step2Data: data,
    });
  },
}));
