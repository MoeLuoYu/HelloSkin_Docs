title run-dev
@echo off
cls
echo.
echo [信息] 使用 npm 运行 VitePress。
echo.

%~d0
cd %~dp0

cd ..
npm run docs:dev

pause