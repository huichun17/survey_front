<script ></script>

<template>
    <!-- 導覽與頁籤 (Navs and tabs) -->
    <ul class="nav nav-tabs ms-5 m-5 w-75 d-flex justify-content-center align-items-center" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
            <button class="nav-link active" id="survey-tab" data-bs-toggle="tab" data-bs-target="#survey" type="button"
                role="tab" aria-controls="survey" aria-selected="true">問卷</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="topic-tab" data-bs-toggle="tab" data-bs-target="#topic" type="button" role="tab"
                aria-controls="topic" aria-selected="false">題目</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="info-tab" data-bs-toggle="tab" data-bs-target="#info" type="button" role="tab"
                aria-controls="info" aria-selected="false">填寫資料</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="statistics-tab" data-bs-toggle="tab" data-bs-target="#statistics" type="button"
                role="tab" aria-controls="statistics" aria-selected="false">統計</button>
        </li>
    </ul>
    <div class="tab-content d-flex justify-content-center align-items-center" id="myTabContent">
        <div class="tab-pane fade show active" id="survey" role="tabpanel" aria-labelledby="survey-tab">
            <!-- 問卷頁籤開始 -->
            <form class="row g-3 w-75 p-3 ">
                <div class="col-12">
                    <label for="inputEmail4" class="form-label">問卷名稱</label>
                    <input type="email" class="form-control" id="inputEmail4">
                </div>
                <div class="col-12">

                    <div class="form-floating">
                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
                            style="height: 100px"></textarea>
                        <label for="floatingTextarea2">問卷說明</label>
                    </div>
                </div>
                <div class="col-12">
                    <label for="inputAddress" class="form-label">開始時間</label>
                    <input type="date" class="form-control" id="inputAddress" placeholder="1234 Main St">
                </div>
                <div class="col-12">
                    <label for="inputAddress2" class="form-label">結束時間</label>
                    <input type="date" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
                </div>

                <div class="col-12 m-5">
                    <button type="button" class="btn btn-outline-danger ms-5 ">取消</button>
                    <button type="button" class="btn btn-outline-success ms-5 ">送出</button>
                </div>
            </form>
        </div>
        <div class="tab-pane fade" id="topic" role="tabpanel" aria-labelledby="topic-tab">
            <!-- 題目頁面開始 -->
            <div class="mb-3 w-100">
                <label for="formGroupExampleInput" class="form-label">問題</label>
                <div class="d-flex">
                    <input type="text" class="form-control" id="formGroupExampleInput">
                    <div class="dropdown">
                        <button class="btn btn-black dropdown-toggle ms-5" type="button" id="dropdownMenu2"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            種類選擇
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <li><button class="dropdown-item" type="button">純文字</button></li>
                            <li><button class="dropdown-item" type="button">單選方塊</button></li>
                            <li><button class="dropdown-item" type="button">複選方塊</button></li>
                        </ul>
                    </div>
                    <div class="form-check ">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label d-flex" for="flexCheckDefault">
                            必填
                        </label>
                    </div>
                </div>
            </div>
            <div class="mb-3">
                <label for="formGroupExampleInput2" class="form-label">選項</label>
                <div class="d-flex">
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="多個答案以；分隔">
                    <button type="button" class="btn btn-light  ms-5">加入</button>
                </div>

            </div>
            <div class="">
                <button type="button" class="btn btn-danger me-5 mb-5">刪除</button>
            </div>
            <!-- 元件 -->
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">#</th>
                        <th scope="col">問卷問題</th>
                        <th scope="col">種類</th>
                        <th scope="col">必填</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <!-- //第一行資料 -->
                        <td>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                                <label class="form-check-label" for="inlineCheckbox1"></label>
                            </div>
                        </td>
                        <th scope="row">1</th>

                        <td>你夢想的職業是？</td>
                        <td>文字</td>
                        <td>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                                <label class="form-check-label" for="inlineCheckbox1"></label>
                            </div>
                        </td>
                        <td><a href="">編輯</a></td>
                    </tr>
                    <tr>
                        <td>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                                <label class="form-check-label" for="inlineCheckbox1"></label>
                            </div>
                        </td>
                        <th scope="row">2</th>
                        <td>你最喜歡的甜點是什麼？</td>
                        <td>複選方塊</td>
                        <td>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                                <label class="form-check-label" for="inlineCheckbox1"></label>
                            </div>
                        </td>
                        <td><a href="">編輯</a></td>

                    </tr>
                    <tr>
                        <td>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                                <label class="form-check-label" for="inlineCheckbox1"></label>
                            </div>
                        </td>
                        <th scope="row">3</th>
                        <td>社交媒體平台大評比</td>
                        <td>單選方塊</td>
                        <td>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                                <label class="form-check-label" for="inlineCheckbox1"></label>
                            </div>
                        </td>
                        <td><a href="">編輯</a></td>
                    </tr>

                </tbody>
            </table>
            <!-- 元件 -->
            <div class="col-12 m-5">
                <button type="button" class="btn btn-outline-danger ms-5 ">取消</button>
                <button type="button" class="btn btn-outline-success ms-5 ">送出</button>
            </div>
        </div>
        <div class="tab-pane fade" id="info" role="tabpanel" aria-labelledby="info-tab">資料頁面

            <!-- 資料頁面開始 -->
        </div>
        <div class="tab-pane fade" id="statistics" role="tabpanel" aria-labelledby="statistics-tab">統計頁面
            <!-- 統計頁面開始 -->
       
        </div>
    </div>
</template>

<style scoped></style>