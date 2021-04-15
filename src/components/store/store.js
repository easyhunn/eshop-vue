import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const getDefaultState = () => {
  return {
    stores: [],
  }
}

export const store = new Vuex.Store({
  state: {
    stores: [],
  },
  mutations: {
    //Thêm mới 1 cửa hàng
    addStore (state, store) {
    state.stores.push(store);
    },
    delete (state, index) {
      state.customers.splice(index, index + 1);
    },
    deleteSelf (state) {
      Object.assign(state, getDefaultState())
    },
    
    
  },
  getters: {
      count: store => store.stores.length,
      // lấy toàn bộ customer
      stores: store => store.stores,
  },

})
