import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const getDefaultState = () => {
  return {
    country: [],
    province: [],
    district: [],
    ward: []
  }
}

export const location = new Vuex.Store({
  state: {
    country: [],
    province: [],
    district: [],
    ward: []
  },
  mutations: {
    //Thêm mới 1 cửa hàng
    addCountry (state, country) {
        state.country.push(country);
    },
    addProvince (state, province) {
        state.province.push(province);
    },
    addDistrict (state, district) {
        state.district.push(district);
    },
    addWard (state, ward) {
        state.ward.push(ward);
    },
    deleteSelf (state) {
      Object.assign(state, getDefaultState())
    },
    
  },
  getters: {
      provinceWithCountry: state => id => {
        return state.province.filter((province) => province.CountryId == id)
      },
      districtWithProvince: state => id => {
        return state.district.filter((district) => district.ProvinceId == id)
      },
      wardWithDistrict: state => id => {
        return state.ward.filter((ward) => ward.DistrictId == id)
      }
  },
})