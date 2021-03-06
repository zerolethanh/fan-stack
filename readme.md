## How to use:

- [DEMO](https://fanstack.classfunc.com)

1. Điền thông tin setting firebase vào file `firebase/clientApp.js`.

Nếu dự án cho trang admin:

- Chỉnh sửa `NEXT_PUBLIC_ADMIN_PAGE=true`
    - Nếu muốn check `admin` trong [custom-claims](https://firebase.google.com/docs/auth/admin/custom-claims),
      chỉnh `NEXT_PUBLIC_ADMIN_CLAIMS_CHECK=true`
- Điền thông tin vào `firebase/nodeApp_service_account.json`.

2. Chạy `npm run dev`
