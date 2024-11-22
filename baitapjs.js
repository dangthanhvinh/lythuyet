@@ -11,12 +11,10 @@ function indanhsach() {
       { hovaten: 'Đặng thành vinh', gioitinh: 'Nam', Noisinh: 'Hà nội' },
   ];

   // Tìm phần tử HTML có id là "danh-sach-thanh-vien"
   const danhSach = document.getElementById('danh-sach-thanh-vien');
   // Tìm phần tử HTML có id là "danhsachthanhvien"
   const danhSach = document.getElementById('danhsachthanhvien');

   thanhvien.forEach((tv) => { /*Như kiểu vòng lặp for, tv như là i còn thanhvien như là n, từng thành viên sẽ được chạy hàm phía trong sau dấu {},
      Gán dữ liệu của js vào div để hiện HTML, nhúng cái bảng từ file js vào HTML */
       // Tạo một div mới cho mỗi thành viên
   thanhvien.forEach((tv) => { 
       const div = document.createElement('div');
       div.className = 'thanh-vien';
       div.innerHTML = `
