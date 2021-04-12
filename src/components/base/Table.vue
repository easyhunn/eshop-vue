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
        <tbody>
          <tr class="h-row" aria-selected="true">
            <td style="min-width:140px; max-width:140px;">misard</td>
            <td style="min-width:230px; max-width:230px;">misard</td>
            <td style="min-width:480px; flex-basis:calc(100vw - 883px); flex-grow: 0; flex-shrink: 0">33 To Hieu, Ha Dong, Ha Noi</td>
            <td  style="min-width:110px; max-width:110px;">0868876760</td>
            <td style="min-width:130px; max-width:130px;">Đang hoạt động</td>
          </tr>
          <tr class="h-row">
            <td style="min-width:140px; max-width:140px;">ST00229</td>
            <td style="min-width:230px; max-width:230px;">Cir2</td>
            <td style="min-width:480px; flex-basis:calc(100vw - 883px); flex-grow: 0; flex-shrink: 0">50 Phan Đình Giót, Hà Nội</td>
            <td  style="min-width:110px; max-width:110px;">039585837</td>
            <td style="min-width:130px; max-width:130px;">Đang hoạt động</td>
          </tr>
          <tr class="h-row">
            <td style="min-width:140px; max-width:140px;">ST00229</td>
            <td style="min-width:230px; max-width:230px;">Cir2</td>
            <td style="min-width:480px; flex-basis:calc(100vw - 883px); flex-grow: 0; flex-shrink: 0">50 Phan Đình Giót, Hà Nội</td>
            <td  style="min-width:110px; max-width:110px;">039585837</td>
            <td style="min-width:130px; max-width:130px;">Đang hoạt động</td>
          </tr>
          <tr class="h-row">
            <td style="min-width:140px; max-width:140px;">ST00229</td>
            <td style="min-width:230px; max-width:230px;">Cir2</td>
            <td style="min-width:480px; flex-basis:calc(100vw - 883px); flex-grow: 0; flex-shrink: 0">50 Phan Đình Giót, Hà Nội</td>
            <td  style="min-width:110px; max-width:110px;">039585837</td>
            <td style="min-width:130px; max-width:130px;">Đang hoạt động</td>
          </tr>
          <tr class="h-row">
            <td style="min-width:140px; max-width:140px;">ST00229</td>
            <td style="min-width:230px; max-width:230px;">Cir2</td>
            <td style="min-width:480px; flex-basis:calc(100vw - 883px); flex-grow: 0; flex-shrink: 0">50 Phan Đình Giót, Hà Nội</td>
            <td  style="min-width:110px; max-width:110px;">039585837</td>
            <td style="min-width:130px; max-width:130px;">Đang hoạt động</td>
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
  width: calc(100vw - 170px);
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

export default {
  name: "Table",
  
  
}
</script>