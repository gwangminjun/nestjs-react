import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message;
  return String(error);
}

export const signupAxios = createAsyncThunk(
  "auth/getSignUp",
  async (newUserData, { rejectWithValue }) => {
    try {
      const response = await axios.post("auth/postSignUp", newUserData);
      return response.data;
    } catch (error) {
      return rejectWithValue(getErrorMessage(error));
    }
  }
);
