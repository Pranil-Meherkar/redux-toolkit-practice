const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  numOfEnemies: 95,
};

const enemySlice = createSlice({
  name: "enemy",
  initialState,
  reducers: {
    defeat: (state) => {
      state.numOfEnemies--;
    },
    respawn: (state, action) => {
      state.numOfEnemies += action.payload;
    },
  },
});

module.exports = enemySlice.reducer;
module.exports.enemyActions = enemySlice.actions;
