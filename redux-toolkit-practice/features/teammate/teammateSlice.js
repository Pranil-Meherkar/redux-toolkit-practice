const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  numOfTeammates: 4,
};

const teammateSlice = createSlice({
  name: "teammate",
  initialState,
  reducers: {
    lost: (state) => {
      state.numOfTeammates--;
    },
  },
});

module.exports = teammateSlice.reducer;
module.exports.teammateActions = teammateSlice.actions;
