# Thiết kế Utils cho dự án test Playwright + WordPress
---

## 1. Danh sách utils cần thiết

| # | File | Mục đích | Mức ưu tiên |
|---|---|---|---|
| 1 | `config/env.ts` | Đọc và kiểm tra biến môi trường (BASE_URL, tài khoản) 
| 2 | `utils/constants.ts` | Đường dẫn trang, tên menu, timeout, thông báo 
| 3 | `utils/data-generator.ts` | Sinh dữ liệu test ngẫu nhiên, không trùng 
| 4 | `utils/api-helper.ts` | Tạo/xóa dữ liệu qua WordPress REST API (setup/teardown nhanh) 
| 5 | `utils/cleanup.ts` | Dọn dữ liệu test sau khi chạy 
| 6 | `utils/wait-helper.ts` | Chờ các điều kiện đặc thù (AJAX, notice) 
| 7 | `utils/string-helper.ts` | Xử lý chuỗi, số từ UI (badge, count)
| 8 | `utils/date-helper.ts` | Tạo timestamp, định dạng ngày 
| 9 | `utils/file-helper.ts` | Tạo file tạm để upload Media, đọc file export 
| 10 | `utils/logger.ts` | Ghi log từng bước, hỗ trợ debug 
| 11 | `utils/custom-matchers.ts` | Assertion tùy biến (ví dụ notice WordPress) 

## 2. Cấu trúc thư mục

```
project/
├── config/
│   └── env.ts
├── utils/
│   ├── constants.ts
│   ├── data-generator.ts
│   ├── api-helper.ts
│   ├── cleanup.ts
│   ├── wait-helper.ts
│   ├── string-helper.ts
│   ├── date-helper.ts
│   ├── file-helper.ts
│   ├── logger.ts
│   └── custom-matchers.ts
├── fixtures/
│   └── pages.fixture.ts      
└── .env
```

---

