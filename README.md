# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## lab9 - React Form-той ажиллах

Бүртгэх гэсэн цэс нэмээд оюутны мэдээлэл оруулах форм хийсэн.
Оюутны код, овог нэр, нас, мэргэжил, и-мэйл, өөрийн тухай мэдээлэл оруулна.
Идэвхтэй оюутан эсэхийг checkbox-оор сонгоно.

useState ашиглаад формын утга, алдааны мэдээлэл, бүртгэгдсэн мэдээллийг тус тус хадгалсан.
handleChange нь бичиж байгаа утгыг state-д шинэчилнэ. Checkbox бол checked утгыг нь авна.
Бүртгүүлэх дарахад preventDefault ашиглаад хуудсыг дахин ачаалахгүй болгосон.
Дараа нь validateForm мэдээллийг шалгана. Нас 16–60, и-мэйл зөв хэлбэртэй,
өөрийн тухай хэсэг 10-аас доошгүй тэмдэгттэй байх ёстой.
Буруу бол тухайн талбарын доор алдаа гарна. Зөв бол амжилттай гэсэн мэдэгдэл гарч,
бүртгэсэн мэдээллийг формын доор харуулна.

Мэдээлэл нь state-д байгаа болохоор refresh хийхэд арилна. Өгөгдлийн сантай холбоогүй.
Header, Navbar, Footer болон lab8-ын тоолуурыг хэвээр үлдээсэн.
