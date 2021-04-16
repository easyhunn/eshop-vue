<template>
  <div class="h-table">
    
    <div class="h-table-header">
      <div class="h-cell" style="min-width:160px; max-width:160px;">
        <div class="title">
          Mã cửa hàng
        </div>
        <div class="filter">
          <div class="filter-type">
            *
          </div>
          <input v-model="filterCategories.storeCode" type="text" class="filter-content" v-on:keyup="loadDataFilter"/>
        </div>
      </div>
      <div class="h-cell" style="min-width:250px; max-width:250px;">
        <div class="title">
          Tên cửa hàng
        </div>
        <div class="filter">
          <div class="filter-type">
            *
          </div>
          <input v-model="filterCategories.storeName" type="text" class="filter-content" v-on:keyup="loadDataFilter"/>
        </div>
      </div>
      <div class="h-cell" style="min-width:500px; width:calc(100vw - 840px);">
        <div class="title">
          Địa chỉ
        </div>
        <div class="filter">
          <div class="filter-type">*</div>
          <input v-model="filterCategories.address" type="text" class="filter-content" v-on:keyup="loadDataFilter"/>
        </div>
      </div>
      <div class="h-cell" style="min-width:130px; max-width:130px;">
        <div class="title">
          Số điện thoại
        </div>
        <div class="filter">
          <div class="filter-type">*</div>
          <input v-model="filterCategories.phoneNumber" type="text" class="filter-content" v-on:keyup="loadDataFilter"/>
        </div>
      </div>
      <div class="h-cell" style="min-width:150px; max-width:150px;">
        <div class="title">
          Trạng thái
        </div>
        <div class="filter">
          <select v-model="filterCategories.status" name="" id="" class="filter-content" v-on:change="loadDataFilter">
            <option value="3">Tất cả</option>
            <option value="1">Đang hoạt đông</option>
            <option value="0">Ngừng hoạt động</option>
          </select>
        </div>
      </div>
    </div>
    <div class="h-table-body">
      <div ref="noContent" class="no-content">Không có dữ liệu</div>
      <table>
        <tbody ref="tbody">

          <tr class="h-row" v-for="(store, i) in stores" :key="i" v-on:click="onRowSelect(store.StoreId, store.StoreName)" :name="store.StoreName" :id="store.StoreId">
            <td style="min-width:140px; max-width:140px;">{{store.StoreCode}}</td>
            <td style="min-width:230px; max-width:230px;">{{store.StoreName}}</td>
            <td style="min-width:480px; flex-basis:calc(100vw - 883px); flex-grow: 0; flex-shrink: 0">{{store.Address}}</td>
            <td  style="min-width:110px; max-width:110px;">{{store.PhoneNumber}}</td>
            <td style="min-width:130px; max-width:130px;">{{store.Status == "1" ? "Đang hoạt động" : "Ngừng hoạt động"}}</td>
          </tr>
          
        </tbody>
      </table>
    </div>
    
  </div>
</template>
<style scoped>

.h-table {
  width: 100%;
  height: 100%;
  overflow-x: auto;
  overflow-y: hidden;
}
.no-content {
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 30px;
  color: #dddd;
}
.h-table-header {
  width: 100%;
  height: 64px;
  display: flex;
  background-color: #eaeff4;
}
.h-table-header .h-cell {
  display: flex;
  flex-direction: column;
  border-left: 1px solid #e1e1e1;
  background: #f0f0f0;
}
.h-table-header .h-cell:hover {
  background-color: transparent;
}
.h-cell .title {
  padding: 7px 10px 6px;
  white-space: nowrap;
  color: #212121;
  font-weight: 700;
  text-align: center;
}
.h-cell .filter {
  display: flex;
  background-color: white;
}

.filter .filter-type {
  background-color: white;
  padding: 7px 13px;
  cursor: pointer;
  border: 1px solid #e1e1e1;
  text-align: center;
  margin-left: 2px;
  
}
.filter .filter-content {
  border: 1px solid #e1e1e1;
  outline: none;
  margin-right: 2px;
  width: 100%;
  padding: 5px 10px
}
.filter select {
  height: 33px;
}
.h-table-body {
  background-color: white;
  width: calc(100vw - 168px);
  /* width: 1194px; */
  min-width: 1195px;
  height: calc(100% - 64px);
  overflow-y: auto;
  overflow-x: hidden;
}
.h-table-body .h-row {
  display: flex;
  
  /* background-color: #e5e6eb; */
}
.h-table-body tr {
  width: calc(100vw - 150px);
  height: 32px;
}

</style>
<script>
import axios from "axios";

import {store} from "../store/Store.js";
// import {location} from "../store/Location.js";
import ADDRESS from "../js/Const.js" ;
import Entity from "../js/Entity.js";

export default {
  
  name: "Table",
  data: () => {
    return {
      stores: store.state.stores,
      selectedRow: "",
      storeNameSelected: "",
      filterCategories: {
        storeCode: "",
        storeName: "",
        address: "",
        phoneNumber: "",
        status: "3",
        startPosition: 1
      },

    }
  },
  props: ['start', 'offset'],
  methods: {
    //tải lại dữ liệu sau khi filter
    //Created By: VM Hùng (16/04/2021)
    loadDataFilter () {
      //Sau 200 ms thì mới tìm kiếm
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }
      this.timer = setTimeout(() => {
        //kiểm tra nếu không nhập dữ liệu
        if (Object.entries(this.filterCategories).toString() === Object.entries(Entity.filterCategories).toString()) {
          this.reLoadData();
        } else {
          this.$refs.noContent.style.display = "none";
          this.$emit("startReload", 1);
          this.clearStore();
          this.filterData();
          this.stores = store.state.stores;
        }
      }, 200);
      
    },
    //Tải dữ liệu
    //Created By: VM Hùng (13/04/2021)
    async loadData() {
      await axios
        .get(ADDRESS.STORE_ADDRESS)
        .then((response) => {
          return response.data;
        })
        .then((data) => {
          if(data.length > 0) {
            // thêm cửa hàng vào store
            data.forEach((element) => {
              store.commit("addStore", element);
            });
            this.$refs.noContent.style.display = "none";

            this.$emit("reloadSuccess", 1);
          } else {
            this.$refs.noContent.style.display = "block";
          }
        })
        .catch((e) => {
          console.log("error ::" + e);
        });
    },
    async filterData() {
      if (this.status == "") this.status = 3; 
       await axios
        .get(ADDRESS.STORE_ADDRESS + "Filter?storeCode=" + this.filterCategories.storeCode
                                          +"&storeName=" + this.filterCategories.storeName
                                          +"&address="   + this.filterCategories.address
                                          +"&phoneNumber="+ this.filterCategories.phoneNumber 
                                          +"&status=" + this.filterCategories.status
        )
        .then((response) => {
          return response.data;
        })
        .then((data) => {
          if (data.length > 0) {
            // thêm cửa hàng vào store
            data.forEach((element) => {
              store.commit("addStore", element);
            });
            this.$refs.noContent.style.display = "none";
          } else {
            this.$refs.noContent.style.display = "block";
          }
        }).then (() => {
          this.$emit("rowNumberChange", store.getters.count);
          this.$emit("reloadSuccess", 1);
        })
        .catch((e) => {
          console.log("error ::" + e);
        });
    },
    async loadDataByIndexOffset (start, offset) {
      await axios
        .get(ADDRESS.STORE_ADDRESS + "page?positionStart=" + start + "&offSet=" + offset)
        .then((response) => {
          return response.data;
        })
        .then((data) => {
          if (data.length > 0)
          // thêm cửa hàng vào store
          data.forEach((element) => {
            store.commit("addStore", element);
          });
          this.$emit("reloadSuccess", 1);
        })
        .then (() => {
          this.$emit("rowNumberChange", store.getters.count);
        })
        .catch((e) => {
          console.log("error ::" + e);
        });
    },
    // Xóa dữ liệu trong store
    //Created By: VM Hùng (13/04/2021)

    clearStore() {
      store.commit("deleteSelf");
    },
    // tải lại dữ liêu
    //Created By: VM Hùng (13/04/2021)

    reLoadData() {
      // xóa màn hình không có dữ liệu
      this.$refs.noContent.style.display = "none";
      this.$emit("startReload", 1)
      this.clearStore();
      this.loadDataByIndexOffset(this.startPosition, this.offSet);
      this.stores = store.state.stores;

    },
    //Khi 1 hàng được chọn
    //Created By: VM Hùng (13/04/2021)
    onRowSelect (id, name) {
      //Xóa hiệu ứng selected từ hàng cũ
      if (this.selectedRow != null && this.selectedRow != "") {
        var rowSelected = document.getElementById(this.selectedRow);
        if (rowSelected.rowIndex % 2 == 0)
          rowSelected.style.backgroundColor = "#fff";
        else 
          rowSelected.style.backgroundColor = "#e5e6eb";
      }
      this.rowSelected(id, name);
      
    },
    //Sự kiện khi hàng được chọn
    // Created By: VM Hùng (14/04/2021)
    rowSelected (id, name) {
      //selected hàng mới
      this.selectedRow = id;
      this.storeNameSelected = name; 
      var rowSelect = document.getElementById(id);
      rowSelect.style.backgroundColor = "#E2E4F1";
      //Gửi id hàng được select về root
      this.$root.$emit("rowSelect", id, name);
    }

  },
  mounted: function() {
    this.startPosition = this.start;
    //Tải dữ liệu vào bảng ngay khi bảng đã tạo
    this.loadDataByIndexOffset(this.startPosition, this.offset);
    // nhận được sự kiện update hoặc insert từ dialog
    this.$root.$on("dialogSubmit", () => {this.reLoadData()})
    this.$root.$on("pageChange", (startPosition, offset) => {
        this.offSet = offset;
        this.startPosition = startPosition;
        this.reLoadData();
    })
    
  },
  updated: function () {
    this.selectedRow = "";
    let firstRow = this.$refs.tbody.children[0];

    if (firstRow) {
      firstRow.click();
    }
  },
  computed: {
    startChange () {
      return this.start;
    }
  },
  watch: {
    startChange() {
      this.startPosition = this.start;
    }
  }

}
</script>