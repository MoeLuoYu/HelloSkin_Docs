title install-dependencies
@echo off
cls
echo.
echo [��Ϣ] ʹ�� npm ��ȫ��Ŀ����������
echo.

%~d0
cd %~dp0

cd ..
npm config set registry http://mirrors.cloud.tencent.com/npm/
npm install
pause