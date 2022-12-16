const configureStore = require("@reduxjs/toolkit").configureStore;
const cakeReducer = require("../features/cake/cakeSlice");

const store = configureStore({
  reducer: {
    cake: cakeReducer,
  },
});

// we are exporting it so that we can use it in the index.js file
module.exports = store;

// we import reducer into the store, and we import actions into the index.js file,
