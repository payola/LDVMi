import { createSelector } from 'reselect'
import { List, fromJS } from 'immutable'
import { _label } from '../../../../misc/lang'
import { arrayToObject } from '../../../../misc/utils'
import prefix from '../prefix'
import { createPromiseStatusSelector } from '../../../../ducks/promises'
import { moduleSelector } from '../selector'
import { Property } from '../models'

// Actions

export const GET_PROPERTIES = prefix('GET_PROPERTIES');
export const GET_PROPERTIES_START = GET_PROPERTIES + '_START';
export const GET_PROPERTIES_ERROR = GET_PROPERTIES + '_ERROR';
export const GET_PROPERTIES_SUCCESS = GET_PROPERTIES + '_SUCCESS';

// Reducer

export default function propertiesReducer(state = new List(), action) {
  if (action.type == GET_PROPERTIES_SUCCESS) {
    const asObject = arrayToObject(action.payload, property => property.uri);
    return fromJS(asObject).map(property =>
      (new Property(property)).set('label', _label(property.get('label'))));
  }

  return state;
};

// Selectors

export const propertiesStatusSelector = createPromiseStatusSelector(GET_PROPERTIES);