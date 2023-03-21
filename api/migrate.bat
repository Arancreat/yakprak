@echo off
set arg1=%1
shift
if "%1" == "" goto migration
set arg2=%1
shift
if "%1" == "" goto creation

./node_modules/.bin/db-migrate %arg1% %arg2% %1

goto end

:creation
./node_modules/.bin/db-migrate %arg1% %arg2%
goto end

:migration
./node_modules/.bin/db-migrate %arg1%

:end