const createSlice = require("@reduxjs/toolkit").createSlice;
const { cakeActions } = require("../cake/cakeSlice");

const initialState = {
  numOfIcecreams: 20,
};

const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIcecreams -= 1;
    },
    restocked: (state, action) => {
      state.numOfIcecreams += action.payload;
    },
  },
  // extraReducers: {
  //   ["cake/ordered"]: (state, action) => {
  //     state.numOfIcecreams -= 1;
  //   },
  //   ["cake/restocked"]: (state, action) => {
  //     state.numOfIcecreams += action.payload;
  //   },
  // },
  extraReducers: (builder) => {
    builder.addCase(cakeActions.ordered, (state, action) => {
      state.numOfIcecreams -= 1;
    });
    builder.addCase(cakeActions.restocked, (state, action) => {
      state.numOfIcecreams += action.payload;
    });
  },
});

module.exports = icecreamSlice.reducer;
module.exports.icecreamActions = icecreamSlice.actions;

// so in this case
// dispatch(icecreaActions.ordered()) ,, the "icecreamActions.ordered()" is now the action creator
// icecream / ordered is now the action type , 3 of 5 in the bracket is the payload
// prev state and next state is also given after the action.
// but in all this , we have only specified the reducer.
