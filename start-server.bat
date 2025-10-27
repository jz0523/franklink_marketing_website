@echo off
echo ========================================
echo Starting Franklink Marketing Website
echo ========================================
echo.
echo Website will be available at:
echo http://localhost:8000
echo.
echo Press Ctrl+C to stop the server
echo ========================================
echo.
python -m http.server 8000
pause