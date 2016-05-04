import { createSelector } from 'reselect'
import createAction from '../../../../misc/createAction'
import { createPromiseStatusSelector } from '../../../core/ducks/promises'
import moduleSelector from '../selector'
import prefix from '../prefix'
import { GET_APPLICATION_START } from '../../../manageApp/ducks/application'
import * as api from '../api'
import withApplicationId from '../../../manageApp/misc/withApplicationId'

// Actions

export const GET_MATRIX = prefix('GET_MATRIX');
export const GET_MATRIX_START = GET_MATRIX + '_START';
export const GET_MATRIX_ERROR = GET_MATRIX + '_ERROR';
export const GET_MATRIX_SUCCESS = GET_MATRIX + '_SUCCESS';

export function getMatrix(nodeUris) {
  return withApplicationId(id => {
    const promise = api.getMatrix(id, nodeUris);
    return createAction(GET_MATRIX, { promise });
  });
}

// Reducer

// We don't need immutable structure here. The matrix will be fairly big and it won't get modified.
const initialState = [];

export default function matrixReducer(state = initialState, action) {
  switch (action.type) {
    case GET_APPLICATION_START:
      return initialState;

    case GET_MATRIX_SUCCESS:
      return action.payload;
  }

  return state;
}

// Selectors

export const matrixStatusSelector = createPromiseStatusSelector(GET_MATRIX);
export const matrixSelector = createSelector(moduleSelector, state => state.matrix);