@echo off
cd /d "%~dp0"
echo ========================================================
echo  Starting Pakshal Agencys Development Server from Root
echo ========================================================
echo.
echo Starting development servers (backend + frontend)...
npm run dev
pause
