// Câu 1

function cau1() {
    var diemToan = document.querySelector("#cau1 .diemToan").value * 1;
    var diemLy = document.querySelector("#cau1 .diemLy").value * 1;
    var diemHoa = document.querySelector("#cau1 .diemHoa").value * 1;
    var diemChuan = document.querySelector("#cau1 .diemChuan").value * 1;
    var khuVucUuTien = document.querySelector("#cau1 .khuVucUuTien").value;
    var doiTuongUuTien = document.querySelector("#cau1 .doiTuongUuTien").value;

    var diemTong = 0;
    var diemUuTien1 = 0;
    var diemUuTien2 = 0;

    if (khuVucUuTien == "A") {
        diemUuTien1 += 2;
    } else if (khuVucUuTien == "B") {
        diemUuTien1 += 1;
    } else if (khuVucUuTien == "C") {
        diemUuTien1 += 0.5;
    } else if (khuVucUuTien == "X" | khuVucUuTien != "A" | khuVucUuTien != "B" | khuVucUuTien != "C") {
        diemUuTien1 += 0;
    }

    console.log(khuVucUuTien);

    if (doiTuongUuTien == "1") {
        diemUuTien2 += 2.5;
    } else if (doiTuongUuTien == "2") {
        diemUuTien2 += 1.5;
    } else if (doiTuongUuTien == "3") {
        diemUuTien2 += 1;
    } else if (doiTuongUuTien == "0" | doiTuongUuTien != "1" | doiTuongUuTien != "2" | doiTuongUuTien != "3") {
        diemUuTien2 += 0;
    }

    console.log(doiTuongUuTien);

    diemTong = diemToan + diemLy + diemHoa + diemUuTien1 + diemUuTien2;

    if (diemTong >= diemChuan) {
        document.getElementById("ketQuaCau1").innerHTML =
            `Chúc mừng bạn đã đậu, điểm tổng =${diemTong}`;
    } else {
        document.getElementById("ketQuaCau1").innerHTML =
            `Chia buồn bạn đã rớt, điểm tổng =${diemTong}`;
    }
}

// end cau 1

// cau 2
function cau2() {
    var ten = document.querySelector("#cau2 .nhapTen").value;
    var soDien = document.querySelector("#cau2 .nhapSoDien").value * 1;
    var tienDien = 0;

    if (soDien <= 50) {
        tienDien = soDien * 500;
    } else if (soDien > 50 && soDien <= 100) {
        tienDien = 50 * 500 + (soDien - 50) * 650;
    } else if (soDien > 100 && soDien <= 200) {
        tienDien = 50 * 500 + 50 * 650 + (soDien - 100) * 850;
    } else if (soDien > 200 && soDien <= 350) {
        tienDien = 50 * 500 + 50 * 650 + 100 * 850 + (soDien - 200) * 1100;
    } else if (soDien > 350) {
        tienDien = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + soDien * 1300;
    }
    console.log(tienDien);

    document.getElementById("ketQuaCau2").innerHTML =
        `họ tên: ${ten} + Tiền điện: ${tienDien}`;
}
// end cau 2

// cau 3

function cau3() {
    var ten = document.querySelector("#cau3 .nhapTen").value;
    var tongThuNhapNam = document.querySelector("#cau3 .tongThuNhapNam").value * 1;
    var soNguoiPhuThuoc = document.querySelector("#cau3 .soNguoiPhuThuoc").value * 1;
    var thuNhapChiuThue = tongThuNhapNam - 4 - soNguoiPhuThuoc * 1.6;
    var phanTramThue = 0;

    if (thuNhapChiuThue <= 60) {
        phanTramThue = 5;
    } else if (60 < thuNhapChiuThue <= 120) {
        phanTramThue = 10;
    } else if (120 < thuNhapChiuThue <= 210) {
        phanTramThue = 15;
    } else if (210 < thuNhapChiuThue <= 384) {
        phanTramThue = 20;
    } else if (384 < thuNhapChiuThue <= 624) {
        phanTramThue = 25;
    } else if (624 < thuNhapChiuThue <= 960) {
        phanTramThue = 30;
    } else if (thuNhapChiuThue < 960) {
        phanTramThue = 35;
    }

    var thueThuNhap = thuNhapChiuThue * 5 / 100;
    var thueThuNhap_ = thueThuNhap.toFixed(2);

    document.getElementById("ketQuaCau3").innerHTML =
        `họ tên: ${ten}, <br>  
        Tiền thuế thu nhập cá nhân: ${thueThuNhap_} triệu`;
}

// end cau 3

// cau 4
document.querySelector("#cau4 .soKetNoi").style.display = "none";

function chonLoaiKH() {
    var loaiKH = document.querySelector("#cau4 .chonLoaiKH").value;
    if (loaiKH == "nhaDan") {
        document.querySelector("#cau4 .soKetNoi").style.display = "none";
    } else {
        document.querySelector("#cau4 .soKetNoi").style.display = "block";
    }
    console.log(loaiKH);
}
function cau4() {
    var loaiKH = document.querySelector("#cau4 .chonLoaiKH").value;
    var maKH = document.querySelector("#cau4 .maKH").value;
    var soKetNoi = document.querySelector("#cau4 .soKetNoi").value * 1;
    var soKenh = document.querySelector("#cau4 .soKenh").value * 1;
    var tienCap = 0;

    if (loaiKH == "nhaDan") {
        tienCap = 4.5 + 20.5 + soKenh * 7.5;

        document.getElementById("ketQuaCau4").innerHTML =
        `Loại khách hàng: ${loaiKH} <br>
        Mã khách hàng: ${maKH} <br>
        Số Kênh: ${soKenh} <br>
        Tiền Cáp: ${tienCap}
        `;
    } else if (loaiKH == "doanhNghiep") {
        if (soKetNoi <= 10) {
            tienCap = 15 + 75 * soKetNoi + soKenh * 50;
        } else if (soKetNoi > 10) {
            tienCap = 15 + 75 * 10 + soKetNoi * 5 + soKenh * 50;
        }

        document.getElementById("ketQuaCau4").innerHTML =
        `Loại khách hàng: ${loaiKH} <br>
        Mã khách hàng: ${maKH} <br>
        Số Kết Nối: ${soKetNoi} <br>
        Số Kênh: ${soKenh} <br>
        Tiền Cáp: ${tienCap}
        `;
    }

    console.log(tienCap);

}

// end cau 4