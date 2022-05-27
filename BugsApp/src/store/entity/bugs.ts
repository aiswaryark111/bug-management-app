import {createSelector, createSlice} from '@reduxjs/toolkit';
import {STATUS, TIME} from '../../core/constants';
import {Bug} from '../../models/bugDetails';

const bugSlice = createSlice({
  name: 'bug',
  initialState: [],
  reducers: {
    createBug: (bug: Bug[], action) => {
      bug.push({
        id: Math.floor(Math.random() * 1000),
        title: action.payload.title,
        description: action.payload.description,
        status: STATUS.new,
        createdOn: Date.now(),
        modifiedOn: Date.now(),
        resolved: false,
      });
    },
    resolveBug: (bug: Bug[], action) => {
      const index = bug.findIndex(
        bugItem => bugItem.id === action.payload.bugId,
      );
      (bug[index].resolved = true),
        (bug[index].status = STATUS.resolved),
        (bug[index].modifiedOn = Date.now());
    },
    removeBug: (bug, action) => {
      return bug.filter((bugItem: Bug) => bugItem.id !== action.payload.bugId);
    },
  },
});

export const bugReducer = bugSlice.reducer;

export const bugSelector = createSelector(
  (state: any) => state,
  state => state.bugReducer,
);

export const resolvedBugSelector = createSelector(
  (state: any) => state,
  state => state.bugReducer.filter((bug: Bug) => bug.resolved === true),
);

export const unResolvedBugSelector = createSelector(
  (state: any) => state,
  state => state.bugReducer.filter((bug: Bug) => bug.resolved === false),
);

export const recentBugsSelector = createSelector(
  (state: any) => state,
  state =>
    state.bugReducer
      .filter((bug: Bug) => (Date.now() - bug.modifiedOn) / TIME.hour <= 24)
      .sort((a: Bug, b: Bug) => (a.modifiedOn > b.modifiedOn ? -1 : 1))
      .slice(0, 5),
);

export const {createBug, resolveBug, removeBug} = bugSlice.actions;
