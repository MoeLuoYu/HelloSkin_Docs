title install-dependencies
@echo off
cls
echo.
echo [信息] 使用 npm 补全项目所需依赖。
echo.

%~d0
cd %~dp0

cd ..
npm config set registry http://mirrors.cloud.tencent.com/npm/
npm install
pause