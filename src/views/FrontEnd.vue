<script>
import TableStripedCom from "../components/TableStriped.vue";
export default {
    components: {},
    data() {
        const today = new Date(); // 获取当前日期
        const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000); // 当天日期加上7天的毫秒数
        const nextWeekISO = nextWeek.toISOString().substr(0, 10); // 将结果转换为ISO格式字符串

        return {


            selectedDate1: today.toISOString().substr(0, 10), // 设置第一个输入框的默认值为当天的日期
            selectedDate2: nextWeekISO // 设置第二个输入框的默认值为当天日期加上7天的日期
        }
    }
}
</script>

<template>
    <div class="form-container" style="overflow: hidden;">
        <h1 class="w-100 d-flex justify-content-center align-items-center">問卷搜尋</h1>

        <form class="row g-3 w-100 p-5">
            <div class="">
                <label for="inputEmail4" class="form-label ">問卷名稱</label>
                <div class="col-12 d-flex">
                    <input type="email" class="form-control" id="inputEmail4">
                    <button type="button" class="btn btn-light  ms-2 ">搜尋</button>
                </div>
            </div>
            <div class="col-6 ">
                <label for="inputAddress" class="form-label" id="inputAddress">開始時間</label>
                <input type="date" class="form-control" id="inputAddress" v-model="selectedDate1"
                    placeholder="1234 Main St">
            </div>
            <div class="col-6">
                <label for="inputAddress2" class="form-label" id="inputAddress2">結束時間</label>
                <input type="date" class="form-control" id="inputAddress2" v-model="selectedDate2"
                    placeholder="Apartment, studio, or floor">
            </div>
        </form>
        <TableStripedCom />
        <nav aria-label="Page navigation example" class="d-flex justify-content-center align-items-center">
            <ul class="pagination">
                <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style scoped> .pagination .page-item a.page-link {
     color: gray;
     /* 設定連結文字顏色為灰色 */
 }</style>