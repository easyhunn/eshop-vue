<template>
    <div id="content">
        <div class="content-header">
            <a class="item" @click="this.addStore">
                <div class="d-icon icon-plus-white"></div>
                <div class="item-content">Thêm mới</div>
            </a>
            <a class="item " >
                <div class="d-icon icon-duplicate"></div>
                <div class="item-content">Nhân bản</div>
            </a >
            <a class="item" @click="this.updateStore">
                <div class="d-icon icon-edit"></div>
                <div class="item-content">Sửa</div>
            </a>
            <a class="item " @click="this.toggleAlertDelete">
                <div class="d-icon icon-delete"></div>
                <div class="item-content">Xoá</div>
            </a>
            <a class="item" @click="this.reload">
                <div class="d-icon icon-reload-white"></div>
                <div class="item-content">Nạp</div>
            </a>
        </div>
        <div class="table">
           <Table ref="Table" v-on:reloadSuccess="hidePreload"/>
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
        <Dialog ref="Dialog" v-show="showDialog" :cancelFunc="toggleDialog" />
        <!-- region alert delete -->
        <div class="alert-delete" v-if="this.showAlertDelete">
            <div class="alert-background"></div>
            <div class="alert-container">
                <div class="alert-header">
                    <div class="alert-title">
                        Xóa dữ liệu
                    </div>
                    <button @click="this.toggleAlertDelete" class="d-icon icon-x"></button>
                </div>
                <div class="alert-content">
                    <div class="d-icon m-icon-help m-icon"></div>
                    <div class="alert-message">
                        Bạn có chắc chắn muốn xóa <b>K2</b> khỏi danh sách cửa hàng.
                    </div>
                </div>
                <div class="alert-footer">
                    <div class="alert-group-button">
                        <button class="button-default btn-red">
                            <div class="d-icon icon-delete-white"></div>
                            <div class="d-text">Xóa</div>
                        </button>
                        <button class="button-default btn-3" @click="this.toggleAlertDelete">
                            <div class="d-icon icon-x"></div>
                            <div class="d-text">Hủy bỏ</div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- end region alert delete -->
        <!-- region pre load screen -->
        <div class="preload" v-show="preload">
            <div class="preload-background"></div>
            <div class="preload-container">
                <div class="loader"></div>
            </div>
        </div>
        <!-- end region pre load screen -->
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
    background-repeat: no-repeat;
    border: none;
    outline: none;
}
.m-icon {
    width: 44px;
    height: 44px;
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
    width: calc(100% - 2px);
    height: 53px;
    background-color: white;
    padding: 0px;
    border-top: 1px solid #e1e1e1;
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
                width: 22px;
                height: 22px;
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
            margin-right: 26px ;
            line-height: 4px;
            color: #4b4c4c;
            font-weight: 300;
        }

.alert-delete {
    position: absolute;
}
.alert-background {
    width: 100vw;
    height: 100vh;
    background: black;
    opacity: 0.5;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 4;
}
.alert-container {
    z-index: 5;
    width: 400px;
    height: 152px;
    background-color: white;
    position: fixed;
    top: calc((100% - 400px) / 2);
    left: calc((100vw - 152px) / 2);
    z-index: 5;
    border-radius: 3px;
}
    .alert-container .alert-header{
        width: calc(100% - 30px);
        display: flex;
        justify-content: space-between;
        padding: 10px 14px;
        height: 21px;
        background-color: #F0F0F0;
        border-radius: 3px 3px 0 0;
        border: 1px solid #dfdfdf;
        border-bottom: none;
    }
        .alert-header .alert-title {
            font-size: 16px;
            font-weight: 600;
            color: #212121;
        }
    .alert-container .alert-content {
        width: calc(100% - 22px);
        height: 44px;
        padding: 10px;
        border: 1px solid #dfdfdf;
        display: flex;
        justify-content: space-between;
    }
        .alert-content .alert-message {
            padding-left: 16px;
            width: 332px;
        }
    .alert-container .alert-footer {
        height: 44px;
        display: flex;
        justify-content: flex-end;
    }
        .alert-footer  .alert-group-button {
            display: flex;
            align-items: center;
            height: 100%;
            
        }
            .alert-group-button .button-default {
                height: 30px;
            }
            .alert-group-button .btn-3:hover {
                border-color: white !important;;
            }
/* pre load */
.preload {
    position: fixed;
    top: 161px;
}
.preload .preload-background {

    background-color: black;
    opacity: 0.2;
    width: calc(100vw - 170px);
    min-width: 1195px !important;
    height: calc(100vh - 161px);
    z-index: 4;
}
.preload .preload-container {
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
}

.loader {
  border: 5px solid #f3f3f3;
  border-radius: 50%;
  border-top: 5px solid #3498db;
  width: 30px;
  height: 30px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

</style>
<script>
import Table from "../base/Table.vue";
import Dialog from "../base/Dialog.vue";
export default {
    name: "Content",
    data: function() {
        return {
            showDialog: false,
            showAlertDelete: false,
            preload : false
        }
    },
    components: {
        Table,
        Dialog
    },
    methods: {
        //hiện màn hình preload
        //CreatedBy: VM Hùng(13/04/2021)
        showPreload() {
            this.preload = true;
        },
        // ẩn màn hình preload
        //CreatedBy: VM Hùng(13/04/2021)
        hidePreload() {
            this.preload = false;
        },
        //Bật tắt dialog
        //CreatedBy: VM Hùng(13/04/2021)
        toggleDialog() {
            this.showDialog = !this.showDialog;
        },
        //Bật thông báo xóa
        //CreatedBy: VM Hùng(13/04/2021)
        toggleAlertDelete() {
            this.showAlertDelete = !this.showAlertDelete;
        },
        //Thêm mới 1 cửa hàng
        //CreatedBy: VM Hùng(13/04/2021)
        addStore() {
            this.toggleDialog();
            this.$refs.Dialog.submitType = "Insert";
            this.$refs.Dialog.showForm();
        },
        //Cập nhật thông tin cửa hàng
        //CreatedBy: VM Hùng(13/04/2021)
        updateStore() {
            this.toggleDialog();
            this.$refs.Dialog.submitType = "update";
            this.$refs.Dialog.showForm();
        },
        // tải lại dữ liệu bảng
        //CreatedBy: VM Hùng(13/04/2021)
        reload () {
            this.showPreload();
            this.$refs.Table.reLoadData();
        }
    }
}
</script>