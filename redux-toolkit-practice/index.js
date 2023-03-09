const store = require("./app/store");
const enemyActions = require("./features/enemy/enemySlice").enemyActions;
const teammateActions =
  require("./features/teammate/teammateSlice").teammateActions;

console.log("Initialstate", store.getState());
const unsubscribe = store.subscribe(() => {});

store.dispatch(enemyActions.defeat());
store.dispatch(enemyActions.defeat());
store.dispatch(teammateActions.lost());
store.dispatch(enemyActions.defeat());
store.dispatch(teammateActions.lost());
store.dispatch(enemyActions.defeat());
store.dispatch(enemyActions.respawn(3));
unsubscribe();
