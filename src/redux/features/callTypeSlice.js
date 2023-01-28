/* eslint-disable prettier/prettier */
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  callType: 'marketVisitCall',
  isLocationCorrect: '',
  presenceDataRight: '',
  opportunityDataRight: '',
  maintenanceDataRight: '',
};

const callTypeSlice = createSlice({
  name: 'callType',
  initialState,
  reducers: {
    setCallType: (state, action) => {
      state.callType = action.payload;
    },
    setIsLocationCorrect: (state, action) => {
      state.isLocationCorrect = action.payload;
    },
    setPresenceDataRight: (state, action) => {
      state.presenceDataRight = action.payload;
    },
    setOpportunityDataRight: (state, action) => {
      state.opportunityDataRight = action.payload;
    },
    setMaintenanceDataRight: (state, action) => {
      state.maintenanceDataRight = action.payload;
    },
  },
});

export default callTypeSlice.reducer;
export const {
  setCallType,
  setIsLocationCorrect,
  setMaintenanceDataRight,
  setOpportunityDataRight,
  setPresenceDataRight,
} = callTypeSlice.actions;
