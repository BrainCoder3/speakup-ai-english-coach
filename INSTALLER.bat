@echo off
rem SpeakUp - installation automatique en un double-clic (Windows 10/11).
rem Installe Node.js et Ollama si besoin, telecharge la plateforme, cree un raccourci et la lance.
title Installation de SpeakUp
setlocal

echo.
echo   ===============================================
echo      Installation de SpeakUp (anglais + espagnol)
echo   ===============================================
echo   Cela prend 10 a 20 minutes la premiere fois. Ne ferme pas cette fenetre.
echo.

rem 1) Node.js
where node >nul 2>&1
if errorlevel 1 (
  echo   [1/4] Installation de Node.js...
  winget install -e --id OpenJS.NodeJS.LTS --silent --accept-package-agreements --accept-source-agreements
)
set "PATH=%PATH%;%ProgramFiles%\nodejs"

rem 2) Ollama (l'IA locale)
where ollama >nul 2>&1
if errorlevel 1 (
  if not exist "%LOCALAPPDATA%\Programs\Ollama\ollama.exe" (
    echo   [2/4] Installation d'Ollama...
    winget install -e --id Ollama.Ollama --silent --accept-package-agreements --accept-source-agreements
  )
)
set "PATH=%PATH%;%LOCALAPPDATA%\Programs\Ollama"

rem 3) La plateforme (derniere version depuis GitHub)
echo   [3/4] Telechargement de la plateforme...
set "DEST=%USERPROFILE%\SpeakUp"
cd /d "%USERPROFILE%"
curl -L -s -o speakup.zip https://github.com/BrainCoder3/speakup-ai-english-coach/archive/refs/heads/main.zip
if errorlevel 1 (
  echo   Erreur de telechargement : verifie la connexion Internet puis relance.
  pause
  exit /b 1
)
if exist speakup-ai-english-coach-main rmdir /s /q speakup-ai-english-coach-main
tar -xf speakup.zip
del speakup.zip
if exist "%DEST%" rmdir /s /q "%DEST%"
move speakup-ai-english-coach-main "%DEST%" >nul

rem 4) Raccourci sur le Bureau
echo   [4/4] Creation du raccourci "SpeakUp" sur le Bureau...
powershell -NoProfile -Command "$s=(New-Object -ComObject WScript.Shell).CreateShortcut([Environment]::GetFolderPath('Desktop')+'\SpeakUp.lnk'); $s.TargetPath='%DEST%\DEMARRER.bat'; $s.WorkingDirectory='%DEST%'; $s.Save()"

echo.
echo   Installation terminee ! Premier lancement (telechargement de l'IA, 2,5 Go)...
cd /d "%DEST%"
call DEMARRER.bat
