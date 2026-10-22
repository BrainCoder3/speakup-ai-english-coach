@echo off
title SpeakUp - Coach d'anglais
cd /d "%~dp0"

echo.
echo   ==========================================
echo      SpeakUp - ton coach d'anglais (gratuit)
echo   ==========================================
echo.

rem Outils installes recemment : on les ajoute au PATH au cas ou Windows ne les connait pas encore
set "PATH=%PATH%;%ProgramFiles%\nodejs;%LOCALAPPDATA%\Programs\Ollama"

rem 1) Ollama (l'IA locale) doit tourner
curl -s http://127.0.0.1:11434/api/version >nul 2>&1
if errorlevel 1 (
  echo   Demarrage d'Ollama...
  start "" /min "%LOCALAPPDATA%\Programs\Ollama\ollama app.exe"
  timeout /t 6 /nobreak >nul
)

rem 2) Le modele doit etre installe (une seule fois, ~2,5 Go)
ollama list | findstr /i "qwen3:4b-instruct" >nul
if errorlevel 1 (
  echo   Telechargement du modele qwen3:4b-instruct ^(une seule fois^)...
  ollama pull qwen3:4b-instruct-2507-q4_K_M
)

rem 3) Dependances + build (seulement la premiere fois)
if not exist node_modules (
  echo   Installation des dependances...
  call npm install
)
if not exist .next\BUILD_ID (
  echo   Construction de l'application...
  call npm run build
)

rem 4) Serveur Next.js + ouverture dans Edge
start "SpeakUp serveur" /min cmd /c "npm run start"
timeout /t 4 /nobreak >nul
start "" msedge "http://localhost:5173"

echo   C'est parti ! La page s'ouvre dans Edge.
echo   Laisse la fenetre "SpeakUp serveur" ouverte pendant que tu pratiques.
timeout /t 5 >nul
