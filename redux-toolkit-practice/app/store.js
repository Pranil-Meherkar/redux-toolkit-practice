const configureStore = require("@reduxjs/toolkit").configureStore;
const { getDefaultMiddleware } = require("@reduxjs/toolkit");
const reduxLogger = require("redux-logger");
const enemyReducer = require("../features/enemy/enemySlice");
const teammateReducer = require("../features/teammate/teammateSlice");

const logger = reduxLogger.createLogger();

const store = configureStore({
  reducer: {
    enemy: enemyReducer,
    teammate: teammateReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(logger);
  },
});

module.exports = store;
