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
          <input type="text" class="filter-content" />
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
          <input type="text" class="filter-content" />
        </div>
      </div>
      <div class="h-cell" style="min-width:500px; width:calc(100vw - 840px);">
        <div class="title">
          Địa chỉ
        </div>
        <div class="filter">
          <div class="filter-type">*</div>
          <input type="text" class="filter-content" />
        </div>
      </div>
      <div class="h-cell" style="min-width:130px; max-width:130px;">
        <div class="title">
          Số điện thoại
        </div>
        <div class="filter">
          <div class="filter-type">*</div>
          <input type="text" class="filter-content" />
        </div>
      </div>
      <div class="h-cell" style="min-width:150px; max-width:150px;">
        <div class="title">
          Trạng thái
        </div>
        <div class="filter">
          <select name="" id="" class="filter-content">
            <option value="">Tất cả</option>
            <option value="">Đang hoạt đông</option>
            <option value="">Ngừng hoạt động</option>
          </select>
        </div>
      </div>
    </div>
    <div class="h-table-body">
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
export default {
  
  name: "Table",
  data: () => {
    return {
      stores: store.state.stores,
      selectedRow: "",
      storeNameSelected: ""
    }
  },
  methods: {
    //Tải dữ liệu
    //Created By: VM Hùng (13/04/2021)
    async loadData() {
      await axios
        .get(ADDRESS.STORE_ADDRESS)
        .then((response) => {
          return response.data;
        })
        .then((data) => {
          // thêm cửa hàng vào store
          data.forEach((element) => {
            store.commit("addStore", element);
          });
          this.$emit("reloadSuccess", 1);
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
      this.clearStore();
      this.loadData();
      
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
    this.loadData();
    this.$root.$on("dialogSubmit", () => {this.reLoadData()})
  },
  updated: function () {
    this.selectedRow = "";
    let firstRow = this.$refs.tbody.children[0];

    if (firstRow) {
      firstRow.click();
    }
}

}
</script>