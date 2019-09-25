export default {
  namespace: 'app',
  state:{
    language: 'zh',
    breadcrumbs: []
  },
  reducers: {
    setBreadcrumbs(state, action) {
      return { ...state, ...action.payload };
    },
  },
  effects: {},
  subscriptions: {},
};
