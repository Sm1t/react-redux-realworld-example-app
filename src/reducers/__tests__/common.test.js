import { expect } from '@jest/globals';
import {
  APP_LOAD,
} from '../../constants/actionTypes';

import commonReducer from '../common'

describe('Reducers: common', () => {
  it('should properly handle action without payload', () => {
    const result = commonReducer({}, { type: APP_LOAD })

    expect(result).toMatchSnapshot()
  });
});