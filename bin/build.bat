title build
@echo off
cls
echo.
echo [��Ϣ] ��� VitePress ������ dist �ļ��С�
echo.

%~d0
cd %~dp0

cd ..
npm run docs:build
move .\docs\.vitepress\dist .\
pause