import { createSelector } from 'reselect'
import * as api from '../api'
import prefix from '../prefix'
import createPromiseReducer from '../../../misc/promiseReducer'
import createAction from '../../../misc/createAction'
import { createPromiseStatusSelector } from '../../core/ducks/promises'
import { Application } from '../models'
import { Visualizer } from '../../core/models'
import { applicationSelector as reducerSelector } from '../selector'
import { visualizersSelector } from '../../core/ducks/visualizers'

// Actions

export const GET_APPLICATION = prefix('GET_APPLICATION');
export const GET_APPLICATION_START = GET_APPLICATION + '_START';
export const GET_APPLICATION_ERROR = GET_APPLICATION + '_ERROR';
export const GET_APPLICATION_SUCCESS = GET_APPLICATION + '_SUCCESS';

export function getApplication(id) {
  const promise = api.getApplication(id);
  return createAction(GET_APPLICATION, { promise }, { id });
}

export const UPDATE_APPLICATION = prefix('UPDATE_APPLICATION');

export function updateApplication(update) {
  return createAction(UPDATE_APPLICATION, update);
}

export const PUBLISH_APPLICATION = prefix('PUBLISH_APPLICATION');
export const PUBLISH_APPLICATION_START = PUBLISH_APPLICATION + '_START';
export const PUBLISH_APPLICATION_ERROR = PUBLISH_APPLICATION + '_ERROR';
export const PUBLISH_APPLICATION_SUCCESS = PUBLISH_APPLICATION + '_SUCCESS';

export function publishApplication(id, published) {
  const promise = api.publishApp(id, published);
  return createAction(PUBLISH_APPLICATION, { promise }, { published });
}

// Reducer

export default function applicationReducer(state = new Application(), action) {

  switch (action.type) {
    case GET_APPLICATION_SUCCESS:
      return new Application(action.payload);

    case UPDATE_APPLICATION:
      return state.mergeDeep(action.payload);

    case PUBLISH_APPLICATION_SUCCESS:
      return state.mergeDeep({ published: action.meta.published });
  }

  return state;
};

// Selectors

export const applicationSelector = reducerSelector;

export const applicationStatusSelector = createPromiseStatusSelector(GET_APPLICATION);
export const createApplicationStatusSelector = idExtractor => createPromiseStatusSelector(GET_APPLICATION, idExtractor)
export const publishStatusSelector = createPromiseStatusSelector(PUBLISH_APPLICATION);

export const applicationVisualizerSelector = createSelector(
  [applicationSelector, visualizersSelector],
  (application, visualizers) => visualizers
    .filter(visualizer => visualizer.componentTemplateId == application.visualizerComponentTemplateId)
    .get(0) || new Visualizer() // empty as default
);
