<script >
import ModalView from "../components/ModalView.vue";
export default {
    components: {

        ModalView
    },
    data() {
        return {
            modalShow: false,
            thankYouModalShow: false

        }
    },
    methods: {
        switchModal() {
            this.modalShow = !this.modalShow;
        }, submitForm() {
            this.modalShow = false; // Hide the confirmation modal
            this.thankYouModalShow = true; // Show the thank you modal
        },
        closeThankYouModal() {
            this.thankYouModalShow = false; // Hide the thank you modal
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

        <!-- 參與者填寫資訊 -->
        <div class="ps-3">
            <div class="mb-3 col-6">
                <label for="formGroupExampleInput" class="form-label">姓名</label>
                <input class="form-control" type="text" placeholder="Disabled input" aria-label="Disabled input example"
                    disabled>
            </div>
            <div class="mb-3 col-6">
                <label for="formGroupExampleInput2" class="form-label">手機</label>
                <input class="form-control" type="text" placeholder="Disabled input" aria-label="Disabled input example"
                    disabled>
            </div>
            <div class="mb-3 col-6">
                <label for="formGroupExampleInput2" class="form-label">E-mail</label>
                <input class="form-control" type="text" placeholder="Disabled input" aria-label="Disabled input example"
                    disabled>
            </div>
            <div class="mb-3 col-6">
                <label for="formGroupExampleInput2" class="form-label">年齡</label>
                <input class="form-control" type="text" placeholder="Disabled input" aria-label="Disabled input example"
                    disabled>
            </div>
        </div>

        <div class="m-5">
            <button type="button" class="btn btn-outline-danger ms-5">修改</button>
            <button @click="switchModal" type="button" class="btn btn-outline-success ms-5">送出</button>
            <ModalView v-if="modalShow" :title="'確認送出？'" @close="switchModal" class="text-danger">
                <div>
                    <button @click="submitForm" type="button" class="btn btn-outline-success ms-5 me-5">確定送出</button>
                </div>
            </ModalView>
            <ModalView v-if="thankYouModalShow" :title="'感謝填寫！'" @close="closeThankYouModal" class="text-danger">
            </ModalView>
        </div>

    </div>
</template>

<style scoped></style>