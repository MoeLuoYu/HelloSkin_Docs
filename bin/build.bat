title build
@echo off
cls
echo.
echo [信息] 打包 VitePress 并导出 dist 文件夹。
echo.

%~d0
cd %~dp0

cd ..
npm run docs:build
move .\docs\.vitepress\dist .\
pause