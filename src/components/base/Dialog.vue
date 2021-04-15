<template>
    <div class="dialog">
        <div class="dialog-background"></div>
        <form class="dialog-container" @submit="submitFunc" >
            <div class="dialog-header">
                <div class="left-header">
                    <div class="header-title">
                        Thêm mới cửa hàng
                    </div>
                </div>
                <div class="right-header">
                    <button type="button" class="d-icon icon-x" @click="this.cancelFunc"></button>
                </div>
            </div>
            <div class="dialog-content">
                <div class="dialog-row">
                    <label >
                        Mã cửa hàng <span class="text-red">*</span>
                    </label>
                    <input v-model="store.StoreCode" ref="storeCode" type="text" class="d-input required">
                    <div  ref="StoreCodeError" class="d-icon icon-exclamation"></div>
                    <span class="input-required">
                        {{storeCodeError}}
                    </span>
                </div>
                <div class="dialog-row">
                    <label >
                        Tên cửa hàng <span class="text-red">*</span>
                    </label>
                    <input v-model="store.StoreName" type="text" class="d-input required">
                    <div class="d-icon icon-exclamation"></div>
                    <span class="input-required">
                        Trường không được phép để trống
                    </span>
                </div>
                <div class="dialog-row">
                    <label >
                        Địa chỉ <span class="text-red">*</span>
                    </label>
                    <textarea id="address" v-model="store.Address" name="" cols="100" rows="3" class="d-text-area required"></textarea>
                    <div class="d-icon icon-exclamation"></div>
                    <span class="input-required" style="top: 70%;">
                        Trường không được phép để trống
                    </span>
                </div>
                <div class="dialog-row">
                    <div class="dialog-sub-row">
                        <label for="">Số điện thoại</label>
                        <input v-model="store.PhoneNumber" type="number" class="d-input">
                    </div>
                    <div class="dialog-sub-row">
                        <label for="" class="left-label">Mã số thuế</label>
                        <input v-model="store.StoreTaxCode" type="text" class="d-input">
                    </div>
                </div>
                
                <div class="dialog-row">
                    <div class="dialog-sub-row">
                        <label for="">Quốc gia</label>
                        <select v-model="store.CountryId" name="" id="Country" class="d-select">
                            <option v-for="(country, id) in countries" v-bind:key="id" :value="country.CountryId" >{{country.CountryName}}</option>
                        </select>
                    </div>
                    <div class="dialog-sub-row">
                        
                    </div>
                </div>
                <div class="dialog-row">
                    <div class="dialog-sub-row">
                        <label for="">Tỉnh/Thành phố</label>
                        <select v-model="store.ProvinceId" id="Province" class="d-select">
                            <option v-for="(province, id) in provinces" v-bind:key="id" :value="province.ProvinceId" >{{province.ProvinceName}}</option>
                        </select>
                    </div>
                    <div class="dialog-sub-row">
                        <label for="" class="left-label">Quận/Huyện</label>
        
                        <select v-model="store.DistrictId" id="District" class="d-select">
                            <option v-for="(district, id) in districts" v-bind:key="id" :value="district.DistrictId" >{{district.DistrictName}}</option>
                        </select>
                    </div>
                </div>
                <div class="dialog-row">
                    <div class="dialog-sub-row">
                        <label for="" >Phường/Xã</label>
                        <select v-model="store.WardId" id="Ward" class="d-select">
                            <option v-for="(ward, id) in wards" v-bind:key="id" :value="ward.WardId">{{ward.WardName}}</option>
                        </select>
                    </div>
                    <div class="dialog-sub-row">
                        <label for="" class="left-label">Đường phố</label>
                        <input v-model="store.Street" type="text" class="d-input">
                    </div>
                </div>
            </div>
            <div class="dialog-footer">
                <div class="dialog-footer-left">
                    <button class="button-default btn-3" >
                        <div class="d-icon icon-help" style="background-size: contain;"></div>
                        <div class="d-text">
                            Trợ giúp
                        </div>
                    </button>
                </div>
                <div class="dialog-footer-right">
                    <button class="button-default btn-1">
                        <div class="d-icon icon-save"></div>
                        <div class="d-text">Lưu</div>
                    </button>
                    <button class="button-default btn-2">
                        <div class="d-icon icon-plus"></div>
                        <div class="d-text">Lưu và thêm mới</div>
                    </button>
                    <button style="border:none" class="button-default btn-3"  @keydown="reFocus" @click="this.cancelFunc">
                        <div class="d-icon icon-x"></div>
                        <div class="d-text" >Hủy bỏ</div>
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>
<style scoped>
.d-icon {
    background-repeat: no-repeat;
    background-position: center;
    border: none  !important;
    outline: none;
}
.dialog-background {
    width: 100vw;
    height: 100vh;
    background: black;
    opacity: 0.5;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 4;
}
.dialog-container {
    z-index: 5;
    width: 600px;
    height: 479px;
    background-color: white;
    position: fixed;
    top: calc((100vh - 479px) / 2);
    left: calc((100vw - 600px) / 2);
    z-index: 5;
    border-radius: 3px;
}
    .dialog-container .dialog-header {
        display: flex;
        justify-content: space-between;
        padding: 10px 14px;
        max-height: 41px;
        background-color: #f0f0f0;
        border-radius: 3px 3px 0 0;
    }
        .dialog-header .header-title {
            font-size: 16px;
            font-weight: 700;
        }
    .dialog-container .dialog-content {
        
        height: 364px;
        display: flex;
        flex-direction: column;
        padding: 16px 16px 0;
        border: 1px solid #e1e1e1;
    }
    .dialog-content .dialog-row{
        width: 100%;
        display: flex;
        padding: 6px 0;
        justify-content: space-between;
    }   
        .dialog-row label {
            white-space: nowrap;
            padding: 8px 5px 0 0;
            min-width: 100px;
            max-width: 100px;
        }
        .dialog-row .left-label {
            padding-left: 16px
        }
        .dialog-row .d-input {
            line-height: 20px;
            width: 100%;
            min-width: 420px;
            padding: 5px 10px;
            outline: none !important;
            border-radius: 3px;
            border: 1px solid #e1e1e1;
        }
        .dialog-row .d-input:focus {
            border: 1px solid #2b3173;
        }
        .dialog-row .icon-exclamation {
            position: relative;
            left: 3px;
            top: 35%;
            min-width: 16px;
            display: none;
        }
        .dialog-row .icon-exclamation:hover + span {
            display: block;
        }
        .dialog-row .input-required {
            position: relative;
            display: none;
            top: 100%;
        }
        .dialog-row .d-select {
            height: 32px;
            min-width: 170px;
            max-width: 170px;
            padding: 5px 10px;
            outline: none !important;
            border-radius: 3px;
            border: 1px solid #e1e1e1;
        }
        .dialog-row .d-select:focus {
             border: 1px solid #2b3173;
        }
        .dialog-row .d-text-area {
            padding: 5px 10px 4px;
            border: 1px solid #e1e1e1;
            border-radius: 3px;
            outline: none;
            max-width: calc(100% - 126px);
            min-width: 420px;
            max-height: 69px;
            min-height: 69px;
            resize: none;
        }
        .dialog-row .d-text-area:focus {
            border: 1px solid #2b3173;
        }
        .dialog-row .dialog-sub-row {
            display: flex;
            white-space: nowrap;
        }
            .dialog-sub-row .d-input {
                max-width: 148px;
                min-width: 148px;
            }
    .dialog-footer {
        display: flex;
        align-items: center;
        height: 61px;
        padding: 0 10px;
        justify-content: space-between;
    }
        .dialog-footer .dialog-footer-left {
            display: flex;
            padding: 7px;
            
        }
            .dialog-footer-left .btn-3:hover {
                background-color: #e5e6eb;
                border-color: #e5e6eb !important;
            }
        .dialog-footer .d-text {
            color: #2b3173;
            font-size: 600;
            padding: 0 5px;
        }
        .dialog-footer .dialog-footer-right {
            display: flex;
        }
    

</style>
<script>
import axios from "axios";

import ADDRESS from "../js/Const.js";
import Entity from "../js/Entity";
import {location} from "../store/Location.js";
import CommonFunction from "../js/Common.js";

export default {
  name: "Dialog",
  props: {
    cancelFunc: Function,
  },
  data: function() {
      return {
          submitType: "",
          store: {
              StoreCode: "",
              StoreName: "",
              Address: "",
              PhoneNumber: "",
              StoreTaxCode: "",
              CountryId: null,
              ProvinceId: null,
              DistrictId: null,
              WardId: null,
              Street: "",
              Status: 1
          },
          countries: {

          },
          provinces: {

          },
          districts: {

          },
          wards: {

          },
          rowSelected: null,
          storeNameSelected: "",
          storeCodeError: "Trường không được phép để trống"
      }
  },
  methods : {
    // chuyển border của tất cả input, select về mặc đinh
    //xóa dấu !
    //Created by: VM Hùng (13/04/2021)
    removeValidate() {
      
      var form = document.getElementsByTagName("form")[0].elements;
      var iconExclamation = document.getElementsByClassName("icon-exclamation");
      // xoá border
      for (let i = 0; i < form.length; ++i) {
        form[i].style.border = "1px solid #d2d2d2";
      }
      //xóa dấu !
      for (let i = 0; i < iconExclamation.length; ++i) {
         iconExclamation[i].style.display = "none";
      }
    },
    //focus vào phần tử đầu tiên của form
    //Created by: VM Hùng (13/04/2021)
    focusFirstElement() {
      this.$refs.storeCode.focus();
    },
    //Kiểm tra thông tin form hợp lệ 
    //Created by: VM Hùng (13/04/2021)

    checkValidate() {
      var valid = true;
      var requiredField = document.getElementsByClassName("required");
      var iconExclamation = document.getElementsByClassName("icon-exclamation");
      for (var i = 0; i < requiredField.length; ++i) {
        if (requiredField[i].value.trim() == "") {
          valid = false;
          requiredField[i].style.border = "1px solid red";
          iconExclamation[i].style.display = "block";
        }
      }
      return valid;
    },
    // focus lại phần từ đầu tiên
    //Created by: VM Hùng (13/04/2021)

    reFocus(e) {
      if (e.keyCode == 9) {
        e.preventDefault();
        this.focusFirstElement();
      }
    },
    // hiên dialog
    //Created by: VM Hùng (13/04/2021)

    showForm() {
        this.storeCodeError = "Trường không được phép để trống";
        if (this.submitType == "Update") {
            this.loadStoreData();
        } else{
            this.setData(Entity.STORE);
        }        
        this.removeValidate();
        this.$nextTick(() => this.focusFirstElement());
        
    },
    //cập nhật thông tin cửa hàng
    //Created by: VM Hùng (13/04/2021)

    updateFunc () {

        // Sửa thông tin khách hàng vào store

        axios
            .put(ADDRESS.STORE_ADDRESS + this.rowSelected, this.store)
            .then(() => {
                this.$root.$emit("success", "Sửa thành công");
                this.cancelFunc();
            }).then (() => {
                //thông báo thêm thành công về table
                this.$root.$emit("dialogSubmit", 1);
            }) 
            .catch((error) => {
                this.storeCodeError = error.response.data.userMsg;
                this.$refs.StoreCodeError.style.display = "block";
            });
    },
    //Thêm mới 1 cửa hàng
    //Created by: VM Hùng (13/04/2021)

    addFunc() {
        //   validate dữ liệu
        if (this.store.PhoneNumber)
            this.store.PhoneNumber = CommonFunction.phoneNumberToString(this.store.PhoneNumber);
        // Thực thêm thông tin trên database
        
        axios
            .post(ADDRESS.STORE_ADDRESS, this.store)
            .then(() => {
                this.$root.$emit("success", "thêm thành công");
                this.cancelFunc();
            }).then (() => {
                //thông báo thêm thành công về table
                this.$root.$emit("dialogSubmit", 1);
            })
            .catch((error) => {
                this.storeCodeError = error.response.data.userMsg;
                this.$refs.StoreCodeError.style.display = "block";
            });

      
    },
    //Tải dữ liệu vào form khi update
    async loadStoreData() {
      await axios
        .get(ADDRESS.STORE_ADDRESS + this.rowSelected)
        .then((response) => {
            return response.data;
        })
        .then((data) => {
            if(this.PhoneNumber)
                data.PhoneNumber = CommonFunction.phoneNumberToNumber(data.PhoneNumber);
            this.setData(data);
        });
    },
    setData (data) {
        Object.assign(this.store, data);
    },
    submitFunc(e) {
      // kiểm tra dữ liệu hợp lệ
      e.preventDefault();
      var valid = this.checkValidate();
      if (valid) {
        // Xác định kiểu sử dụng modal
        if (this.submitType == "Update") {
          this.updateFunc();
        } else {
          this.addFunc();
        }
        
      }
    },

    
  },
  mounted() {
    var form = document.getElementsByTagName("form")[0];
    //Thêm sự kiện khi focus vào ô
    form.addEventListener(
      "focus",
      (event) => {
        event.target.style.border = "1px solid #2b3173";
        event.target.style.outline = "none";
        // var iconExclamation = document.getElementsByClassName("icon-exclamation");
        //event.target.nextElementSibling.style.display = "none";
      },
      true
    );
    
    form.addEventListener(
      "blur",
      (event) => {
        if (!event.target.value.trim() && event.target.tagName != "BUTTON" && event.target.classList.contains("required"))
          event.target.style.border = "1px solid red";
        else event.target.style.border = "1px solid #e1e1e1";
      },
      true
    );
    //Tải dữ liệu đất nước
    this.countries = location.state.country;
  },
  created: function() {
    // Hàng đầu tiên được chọn ngay lúc mở trang
    this.$root.$on("rowSelect", (rowId, name) => {
        this.rowSelected = rowId
        this.storeNameSelected = name;
    });
  },
  computed: {
      getCountry () {
          return this.store.CountryId;
      },
      getProvince () {
          return this.store.ProvinceId;
      },
      getDistrict () {
          return this.store.DistrictId;
      }
  },
  watch: {
      getCountry () {
          this.provinces = location.getters.provinceWithCountry(this.store.CountryId);
          this.districts = [];
          this.wards = [];
      },
      getProvince () {
          this.districts = location.getters.districtWithProvince(this.store.ProvinceId);
          this.wards = [];
      },
      getDistrict () {
          this.wards = location.getters.wardWithDistrict(this.store.DistrictId);
      }
  }

}
</script>