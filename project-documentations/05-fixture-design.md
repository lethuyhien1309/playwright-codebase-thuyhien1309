# 05 - Fixture Design


##  Danh sách fixture

| Fixture | Mục đích |
|---|---|
| `auth.setup` (storageState) | Đăng nhập admin, lưu cookie vào  |
| `wpApi` | Lấy REST nonce (cookie auth) để gọi  |
| `createPage` | Tạo page (draft/publish), trả về , tự xóa sau test |
| `draftPages` | Tạo sẵn 3 page draft với tiêu đề duy nhất |
| `pagesList` | Thao tác trang Pages list: mở, tìm kiếm, bulk action, row action |
| `uniqueTitle` | Sinh tiêu đề không trùng |

Các fixture mở rộng (làm khi có test tương ứng): `createPost`, `createUser`, `mediaUpload`, `editorPage` (Gutenberg), `quickEdit`.

