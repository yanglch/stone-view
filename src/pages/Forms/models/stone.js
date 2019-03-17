import { routerRedux } from 'dva/router';
import { message } from 'antd';
import getStoneDataSource from '@/services/stone';

export default {
  namespace: 'stone',

  state: {
    stonePage: []
  },

  effects: {
    *getStoneDataSource({payload }, {call, put}) {
      const {typeId, pageNum, pageSize} = payload;
      const response = yield call(getStoneDataSource, typeId, pageNum, pageSize);
      yield put({
        type: 'saveStoneData',
        payload: response
      });
    },
  },

  reducers: {
    saveStoneData(state, { payload }) {
      return {
        ...state,
        stonePage: payload,
      };
    },
  },
};
