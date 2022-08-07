cd api
DEL "migrations\*.php" /S /Q 
php bin/console doctrine:schema:drop --full-database --force
php bin/console doctrine:migrations:diff
php bin/console doctrine:migrations:migrate
pause