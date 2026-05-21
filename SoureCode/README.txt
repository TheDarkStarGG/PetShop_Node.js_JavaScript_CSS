1. Tạo csdl với bảng pet_services
 
2. Mở file sql có trong file tải về code toàn bộ vào csdl vừa tạo và chạy để thêm csdl vào database.
 
3. Mở cả 2 file code song song bằng vscode.
 
4. Bên phía file job-be mở file config.json trong file config ở trên cùng sửa đổi phần development tài khoản root của mysql.

5. Chạy lệnh này ở cả hai file trước khi chạy: npm install --legacy-peer-deps
 
6. Dùng lệnh npm start ở cả hai file để bắt đầu chạy trên host.
 
7. Ở backend có thể gặp lỗi nếu bạn chưa cài nodemon bạn có thể chạy lệnh npm install -g nodemon rồi chạy lại npm start

8. Mở web lên và vào địa chỉ http://localhost:3000.
 
9. Có thể mở api backend bằng địa chỉ  http://localhost:666
 
10. Tài khoản đăng nhập có toàn bộ trong database.