<script>

export default {

}
</script>
<template>
    <div class="container">
        <div class="row p-3 mt-3">
            <div class="col">
                <!-- <div class="d-flex flex-row bd-highlight mb-3">
                    <div class="p-2 bd-highlight">Flex item 1</div>
                    <div class="p-2 bd-highlight">Flex item 2</div>
                    <div class="p-2 bd-highlight">Flex item 3</div>
                </div> -->
            </div>
            <div class="col">
                <div class="btn btn-add">
                    <i class="fa-solid fa-plus me-1"></i>
                    Thêm phiếu đăng ký
                </div>
                <div class="btn m-2 btn-excel">
                    <i class="fa-solid fa-file-csv me-2"></i>
                    Xuất file Excel
                </div>
                <div class="btn btn-pdf">
                    <i class="fa-solid fa-file-pdf me-2"></i>
                    Xuất file PDF
                </div>
            </div>
        </div>
        <div class="row">
            <div class="container p-4">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Tên xe</th>
                            <th>Hãng xe</th>
                            <th>Thời gian đăng ký</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>HD12</td>
                            <td>Honda Civic 2020</td>
                            <td>HONDA</td>
                            <td>12-12-2022</td>
                        </tr>
                        <tr>
                            <td>HD12</td>
                            <td>Honda Civic 2020</td>
                            <td>HONDA</td>
                            <td>12-12-2022</td>
                        </tr>
                        <tr>
                            <td>HD12</td>
                            <td>Honda Civic 2020</td>
                            <td>HONDA</td>
                            <td>12-12-2022</td>
                        </tr>
                        <tr>
                            <td>HD12</td>
                            <td>Honda Civic 2020</td>
                            <td>HONDA</td>
                            <td>12-12-2022</td>
                        </tr>
                    </tbody>

                </table>
            </div>

        </div>

    </div>

</template>