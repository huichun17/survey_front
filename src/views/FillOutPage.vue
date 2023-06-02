<script >
import ModalView from "../components/ModalView.vue";
export default {
    components: {

        ModalView
    },
    data() {
        return {
            modalShow: false,
        }
    },
    methods: {
        switchModal() {
            this.modalShow = !this.modalShow;
        }
    }
}
</script>
<template>
    <div class="p-5 w-100">
        <div class="d-flex">
            <h1 class="">題目</h1>
            <h6>投票時間</h6>
        </div>
        <h6>問卷說明qwertyuio</h6>
        <!-- 參與者填寫資訊 -->
        <div class="ps-3">
            <div class="mb-3 col-6">
                <label for="formGroupExampleInput" class="form-label">姓名</label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input placeholder">
            </div>
            <div class="mb-3 col-6">
                <label for="formGroupExampleInput2" class="form-label">手機</label>
                <input type="number" class="form-control" id="formGroupExampleInput2"
                    placeholder="Another input placeholder">
            </div>
            <div class="mb-3 col-6">
                <label for="formGroupExampleInput2" class="form-label">E-mail</label>
                <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder">
            </div>
            <div class="mb-3 col-6">
                <label for="formGroupExampleInput2" class="form-label">年齡</label>
                <input type="number" class="form-control" id="formGroupExampleInput2"
                    placeholder="Another input placeholder">
            </div>
        </div>

        <div class="m-5">
            <button type="button" class="btn btn-outline-danger ms-5 ">取消</button>
            <button type="button" class="btn btn-outline-success ms-5 ">送出</button>

        </div>
    </div>
</template>

<style scoped></style>