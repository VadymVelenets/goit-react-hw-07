import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = "https://66197ccd125e9bb9f29a1e2b.mockapi.io/";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
  try {
    const response = await axios.get("contacts");
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});

export const addContact = createAsyncThunk("contacts/addContact", async (newContact, thunkAPI) => {
  try {
    const response = await axios.post("contacts", newContact);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (contactId, thunkAPI) => {
  try {
    const response = await axios.delete(`contacts/${contactId}`);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});
