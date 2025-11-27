// Quản lí học sinh
// Các chức năng:

// Nhập danh sách học sinh

// Xem danh sách

// Tìm học sinh điểm cao nhất

// Tính điểm trung bình lớp

// Lọc học sinh giỏi (>=8)

// Tìm học sinh theo tên

// Thêm học sinh

// Xóa học sinh theo tên

// Thoát chương trình
// Lưu ý: Mỗi chức năng sẽ được triển khai trong các hàm riêng biệt và có thể được gọi từ giao diện người dùng.
// Đây chỉ là khung cơ bản, bạn có thể mở rộng và thêm các chức năng chi tiết hơn theo yêu cầu.
let danhSachHocSinh = [];
function nhapDanhSachHocSinh() {
  const soLuong = Number(prompt("Nhập số lượng học sinh:"));
  for (let i = 0; i < soLuong; i++) {
    const ten = prompt(`Nhập tên học sinh thứ ${i + 1}:`);
    const diem = Number(prompt(`Nhập điểm học sinh thứ ${i + 1}:`));
    const tuoi = Number(prompt(`Nhập tuổi học sinh thứ ${i + 1}:`));
    danhSachHocSinh.push({ ten, tuoi, diem });
  }
  console.log("Danh sách học sinh đã được nhập thành công.");
}

while (true) {
  const input = Number(
    prompt(`Chào mừng bạn đến với chương trình quản lí học sinh.
        Vui lòng chọn chức năng bạn muốn sử dụng:
        1. Nhập danh sách học sinh
        2. Xem danh sách học sinh
        3. Tìm học sinh có điểm cao nhất
        4. Tính điểm trung bình lớp
        5. Lọc học sinh giỏi (điểm >= 8)
        6. Tìm học sinh theo tên
        7. Thêm học sinh
        8. Xóa học sinh theo tên
        9. Thoát chương trình`)
  );
  switch (input) {
    case 1:
      nhapDanhSachHocSinh();
      break;
    case 2:
      console.log("Danh sách học sinh:", danhSachHocSinh);
      break;
    case 3:
      if (danhSachHocSinh.length === 0) {
        console.log("Danh sách học sinh trống.");
        break;
      }
      let hocSinhDiemCaoNhat = danhSachHocSinh[0];
      for (const hocSinh of danhSachHocSinh) {
        if (hocSinh.diem > hocSinhDiemCaoNhat.diem) {
          hocSinhDiemCaoNhat = hocSinh;
        }
      }
      console.log("Học sinh có điểm cao nhất:", hocSinhDiemCaoNhat);
      break;
    case 4:
      if (danhSachHocSinh.length === 0) {
        console.log("Danh sách học sinh trống.");
        break;
      }
      let tongDiem = 0;
      for (const hocSinh of danhSachHocSinh) {
        tongDiem += hocSinh.diem;
      }
      const diemTrungBinh = tongDiem / danhSachHocSinh.length;
      console.log("Điểm trung bình lớp:", diemTrungBinh);
      break;
    case 5:
      const hocSinhGioi = danhSachHocSinh.filter((hs) => hs.diem >= 8);
      console.log("Danh sách học sinh giỏi:", hocSinhGioi);
      break;
    case 6:
      const tenCanTim = prompt("Nhập tên học sinh cần tìm:");
      const ketQuaTimKiem = danhSachHocSinh.filter((hs) =>
        hs.ten.toLowerCase().includes(tenCanTim.toLowerCase())
      );
      console.log("Kết quả tìm kiếm:", ketQuaTimKiem);
      break;
    case 7:
      const tenMoi = prompt("Nhập tên học sinh mới:");
      const tuoiMoi = Number(prompt("Nhập tuổi học sinh mới:"));
      const diemMoi = Number(prompt("Nhập điểm học sinh mới:"));
      danhSachHocSinh.push({ ten: tenMoi, tuoi: tuoiMoi, diem: diemMoi });
      console.log("Học sinh mới đã được thêm.");
      break;
    case 8:
      const tenCanXoa = prompt("Nhập tên học sinh cần xóa:");
      danhSachHocSinh = danhSachHocSinh.filter(
        (hs) => hs.ten.toLowerCase() !== tenCanXoa.toLowerCase()
      );
      console.log(`Học sinh có tên "${tenCanXoa}" đã được xóa (nếu tồn tại).`);
      break;

    case 9:
      console.log("Cảm ơn bạn đã sử dụng chương trình. Tạm biệt!");
      exit();
    default:
      console.log("Chức năng chưa được triển khai.");
      break;
  }
}
