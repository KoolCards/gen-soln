import { createContext, Dispatch } from "react";

import { PayloadAction, createSlice, AnyAction } from "@reduxjs/toolkit";

export interface AmountStepProps {
  radioButtonAmount: number | null;
  otherAmount: number;
}

export interface ContactStepProps {
  firstName: string;
  lastName: string;
  email: string;
}

export type State = {
  curStepIndex: number;
  maxCurStepIndex: number;
  isContinueButtonDisabled: boolean;
  contactStep: ContactStepProps;
  amountStep: AmountStepProps;
};

export const AMOUNTS = [25, 50, 100, 250, 500];

export const MIN_OTHER_AMOUNT = "0.5";
export const MAX_OTHER_AMOUNT = "2000";

export const initialState: State = {
  curStepIndex: 0,
  maxCurStepIndex: 0,
  isContinueButtonDisabled: false,
  contactStep: {
    firstName: "",
    lastName: "",
    email: ""
  },
  amountStep: {
    radioButtonAmount: AMOUNTS[0],
    otherAmount: +MIN_OTHER_AMOUNT
  }
};

const name = "donationPageSlice";

const setMaxCurStepIndex = (state: State) => {
  state.maxCurStepIndex = Math.max(state.maxCurStepIndex, state.curStepIndex);
};

const { actions, reducer } = createSlice({
  name,
  initialState,
  reducers: {
    resetState: () => initialState,
    incrementStep(state) {
      state.curStepIndex++;
      setMaxCurStepIndex(state);
    },
    setStep(state, { payload }: PayloadAction<number>) {
      state.curStepIndex = payload;
      setMaxCurStepIndex(state);
    },
    setIsContinueButtonDisabled(state, { payload }: PayloadAction<boolean>) {
      state.isContinueButtonDisabled = payload;
    },
    setRadioButtonAmount(
      { amountStep },
      { payload }: PayloadAction<number | null>
    ) {
      amountStep.radioButtonAmount = payload;
    },
    setOtherAmount({ amountStep }, { payload }: PayloadAction<number>) {
      amountStep.otherAmount = payload;
    },
    setContactStepField(
      { contactStep },
      { payload }: PayloadAction<{ key: keyof ContactStepProps; value: string }>
    ) {
      contactStep[payload.key] = payload.value;
    }
  }
});

export const DonationPageStateDispatch = createContext<Dispatch<
  AnyAction
> | null>(null);

export const {
  resetState,
  incrementStep,
  setStep,
  setIsContinueButtonDisabled,
  setRadioButtonAmount,
  setOtherAmount,
  setContactStepField
} = actions;

export default reducer;
