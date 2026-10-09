# 06 - Coding Convention Design
## 1. Quy tắc đặt tên

| Đối tượng | Quy tắc | Ví dụ |
|---|---|---|
| File / folder | `kebab-case` | `pages-list.spec.ts`, `auth.setup.ts` |
| File test | `<tính-năng>.spec.ts` | `pages-list.spec.ts` |
| File page object | `<tên>.page.ts` | `pages-list.page.ts` |
| Class | `PascalCase` | `PagesListPage` |
| Biến, hàm, method | `camelCase`, bắt đầu bằng động từ với hàm | `createPage`, `rowById` |
| Hằng số | `UPPER_SNAKE_CASE` | `STORAGE_STATE` |
| Type / Interface | `PascalCase`, không tiền tố `I` | `WpPage` |
| Biến môi trường | `UPPER_SNAKE_CASE`, tiền tố `WP_` | `WP_ADMIN_USER` |
| Locator trong POM | danh từ mô tả phần tử | `searchInput`, `applyButton` |

## 2. Cấu trúc test

- Một file `.spec.ts` cho một tính năng; nhóm test bằng `test.describe`.
- Tên test mô tả **hành vi mong đợi**, viết nhất quán một ngôn ngữ trong toàn dự án (ví dụ: `hiển thị các draft đã tạo`).
- Mỗi test **độc lập**: không dựa vào thứ tự chạy hay dữ liệu của test khác.
- Mỗi test kiểm tra **một hành vi**; có thể nhiều `expect` nếu cùng phục vụ hành vi đó.
- Cấu trúc **Arrange - Act - Assert**: chuẩn bị dữ liệu (fixture), thao tác, kiểm tra.
- Tránh logic điều kiện (`if`, vòng lặp phức tạp) trong test.
- Dùng `test.step()` cho các luồng dài để báo cáo dễ đọc.
- Gắn tag cho nhóm test: `@smoke`, `@regression`.


## 3. Locator

Thứ tự ưu tiên:
1. `getByRole`, `getByLabel`, `getByText` (gần với người dùng).
2. `getByTestId` nếu có `data-testid`.
3. CSS/ID ổn định của WordPress (`#post-search-input`, `table.wp-list-table`).
4. XPath: **tránh dùng**, chỉ khi không còn cách khác.

Quy tắc kèm theo:
- Không dùng selector dựa vào vị trí (`nth-child`, `.first()`) khi có cách định danh rõ hơn; dòng trong bảng ưu tiên tìm theo ID (`#post-{id}`).
- Mọi locator khai báo trong page object, **không viết locator trực tiếp trong file test**.

## 4. Chờ và đồng bộ

- Dựa vào auto-wait của Playwright và web-first assertion (`await expect(locator).toBeVisible()`).
- **Cấm** `page.waitForTimeout()` và `sleep` cố định.
- Cần chờ điều kiện cụ thể thì dùng `waitForURL`, `waitForResponse`, hoặc `expect.poll`.

## 5. Assertion

- Dùng web-first assertion của Playwright, không dùng `expect(await locator.isVisible()).toBe(true)`.
- Mỗi assertion quan trọng nên có thông điệp rõ ràng khi chạy API/setup (ví dụ `expect(res.ok(), 'Create page failed').toBeTruthy()`).
- Dùng `expect.soft` khi muốn thu thập nhiều lỗi trong cùng một test.

## 6. Page Object và fixture

- Page object chỉ chứa locator và hành động; **không chứa assertion nghiệp vụ** (assertion nằm trong test).
- Method của POM trả về `Promise<void>` hoặc dữ liệu cần dùng, đặt tên theo hành động người dùng (`search`, `bulkAction`).
- Test import `test` và `expect` từ `src/fixtures`, không import trực tiếp từ `@playwright/test`.
- Dữ liệu test tạo bằng fixture factory, mọi bản ghi tạo ra phải được dọn sau test.
- Chi tiết xem `03-pom-design.md` và `05-fixture-design.md`.

## 7. Dữ liệu test và cấu hình

- Không hard-code URL, tài khoản, mật khẩu trong code; lấy từ `.env`.
- `.env` và `.auth/` nằm trong `.gitignore`; cung cấp `.env.example` (không chứa giá trị thật).
- Dữ liệu động dùng `uniqueTitle()` để tránh trùng giữa các test chạy song song.
- Không phụ thuộc dữ liệu có sẵn trên môi trường dev.

