<template>
    <div class="dialog">
        <div class="dialog-background"></div>
        <div class="dialog-container">
            <div class="dialog-header">
                <div class="left-header">
                    <div class="header-title">
                        Thêm mới cửa hàng
                    </div>
                </div>
                <div class="right-header">
                    <div class="d-icon icon-x"></div>
                </div>
            </div>
            <div class="dialog-content">
                <div class="dialog-row">
                    <label >
                        Mã cửa hàng <span class="text-red">*</span>
                    </label>
                    <input type="text" class="d-input">
                </div>
                <div class="dialog-row">
                    <label >
                        Tên cửa hàng <span class="text-red">*</span>
                    </label>
                    <input type="text" class="d-input">
                </div>
                <div class="dialog-row">
                    <label >
                        Địa chỉ <span class="text-red">*</span>
                    </label>
                    <textarea name="" id="" cols="100" rows="3" class="d-text-area"></textarea>
                </div>
                <div class="dialog-row">
                    <div class="dialog-sub-row">
                        <label for="">Số điện thoại</label>
                        <input type="text" class="d-input">
                    </div>
                    <div class="dialog-sub-row">
                        <label for="" class="left-label">Mã số thuế</label>
                        <input type="text" class="d-input">
                    </div>
                </div>
                
                <div class="dialog-row">
                    <div class="dialog-sub-row">
                        <label for="">Quốc gia</label>
                        <input type="text" class="d-input">
                    </div>
                    <div class="dialog-sub-row">
                        
                    </div>
                </div>
                <div class="dialog-row">
                    <div class="dialog-sub-row">
                        <label for="">Tỉnh/Thành phố</label>
                        <input type="text" class="d-input">
                    </div>
                    <div class="dialog-sub-row">
                        <label for="" class="left-label">Quận/Huyện</label>
                        <input type="text" class="d-input">
                    </div>
                </div>
                <div class="dialog-row">
                    <div class="dialog-sub-row">
                        <label for="" >Phường/Xã</label>
                        <input type="text" class="d-input">
                    </div>
                    <div class="dialog-sub-row">
                        <label for="" class="left-label">Đường phố</label>
                        <input type="text" class="d-input">
                    </div>
                </div>
            </div>
            <div class="dialog-footer"></div>
        </div>
    </div>
</template>
<style scoped>

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
            padding: 5px 10px;
            outline: none !important;
            border-radius: 3px;
            border: 1px solid #e1e1e1;
        }
        .dialog-row .d-text-area {
            padding: 5px 10px 4px;
            border: 1px solid #e1e1e1;
            border-radius: 3px;
        }
        .dialog-row .dialog-sub-row {
            display: flex;
            white-space: nowrap;
        }
            .dialog-sub-row .d-input {
                max-width: 148px;
                min-width: 148px;
            }
            
    

</style>