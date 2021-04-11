<template>
    <div id="content">
        <div class="content-header">
            <a class="item">
                <div class="d-icon icon-plus"></div>
                <div class="item-content">Thêm mới</div>
            </a>
            <a class="item ">
                <div class="d-icon icon-duplicate"></div>
                <div class="item-content">Nhân bản</div>
            </a >
            <a class="item ">
                <div class="d-icon icon-edit"></div>
                <div class="item-content">Sửa</div>
            </a>
            <a class="item ">
                <div class="d-icon icon-delete"></div>
                <div class="item-content">Xoá</div>
            </a>
            <a class="item">
                <div class="d-icon icon-reload"></div>
                <div class="item-content">Nạp</div>
            </a>
        </div>
        <div class="table">
           <Table />
        </div>
        <div class="footer">
            <div class="pagging">
                <div class="pagging-left">
                    <a class="d-icon icon-double-prepage disable"></a>
                    <a class="d-icon icon-prepage disable"></a>
                    <div style="padding: 0 4px">Trang</div>
                    <input type="text" value="1">
                    <div style="padding: 0 10px 0 4px">Trên 1</div>
                    <a class="d-icon icon-nextpage disable"></a>
                    <a class="d-icon icon-double-nextpage disable"></a>
                    <a class="d-icon icon-reload"></a>
                    <select name="" id="">
                        <option value="">50</option>
                        <option value="">100</option>
                    </select>
                </div>
                <dir class="pagging-right">
                    Hiều thị 1 - 2 Trên 2 kết quả
                </dir>
            </div>
        </div>
    </div>
</template>
<style >
#content {
    width: calc(100% - 168px);
    height: calc(100vh - 68px);
    background-color: #e5e6eb;
    margin-left: 150px;
    padding: 8px;

}
.d-icon {
    width: 16px;
    height: 16px;
    padding: 0 3px 0 0;
    cursor: pointer;
}
.disable {

    opacity: 0.5;
    cursor: default;
}
.content-header {
    display: flex;
    background-color: #2b3173;
    color: #fff;
    height: 36px;
    align-items: center;
}
.content-header .item {
    display: flex;
    justify-content: space-between;
    padding-left: 7px;
    padding-right: 7px;
    height: 100%;
    align-items: center;
    border-left: 1px solid #190472;
}
.content-header .item:hover {
    background-color: #0088c1;
}
.content-header .item .item-content {
    padding: 0 5px;
    cursor: pointer;
     white-space: nowrap;
}

.table {
    width: 100%;
    height: calc(100% - 94px);
}
.footer {
    width: 100%;
    height: 53px;
    background-color: white;
    padding: 0px;
}
    .footer .pagging {
        display: flex;
        flex-direction: row;
        height: 26px;
        width: 100%;
        justify-content: space-between;
        padding: 10px;
    }
        .pagging .pagging-left{
            display: flex;
            align-items: center;
        }
            .pagging-left .d-icon {
                border: 1px solid #6b6f9d;
                border-radius: 3px;
                width: 24px;
                height: 24px;
                margin: 1px;
                padding: 0;
            }
            .pagging-left select {
                padding: 0 4px 0 4px;
                border: 1px solid #d1d1d1;
                border-radius: 3px;
                height: 100%;
                margin: 0 1px 0 1px;
            
            }
            .pagging-left input {
                min-height: 12px;
                max-width: 40px;
                min-width: 40px;
                padding: 4px 6px;
                text-align: center;
                margin-right: 6px;
                margin-left: 10px;
                outline: none;
                border: 1px solid #e1e1e1;
                border-radius: 3px;
            }
        .pagging .pagging-right {
            margin-right: 10px ;
            line-height: 4px;
            color: #4b4c4c;
            font-weight: 300;
        }
</style>
<script>
import Table from "../base/Table.vue";
export default {
    name: "Content",
    components: {
        Table
    }
}
</script>