title run-dev
@echo off
cls
echo.
echo [��Ϣ] ʹ�� npm ���� VitePress��
echo.

%~d0
cd %~dp0

cd ..
npm run docs:dev

pause