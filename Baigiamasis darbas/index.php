<?php

session_start();

require_once 'index.html';

define('ROOT_PATH', dirname(__FILE__));

$env_path = ROOT_PATH . '/.env';

if (file_exists($env_path)) {
        define('_ENV', parse_ini_file($env_path));
    } else {
        echo '".env" not found';
        exit;
    }


unset($env_path);

require_once ROOT_PATH . '/src/functions.php';

error_reporting(E_ALL);

if (env('DEBUG', FALSE)) {
    ini_set('display_errors', TRUE);
    ini_set('display_startup_errors', TRUE);
} else {
    ini_set('display_errors', FALSE);
    ini_set('display_startup_errors', FALSE);

    ini_set('log_errors', TRUE);
    ini_set('error_log', ROOT_PATH . '/logs/php-error.log');
}

try {
    require_once ROOT_PATH . '/src/app.php';
}
    /*
    catch (PDOException $e) {
        echo 'DB Fail';
        exit;
    }
    */
catch (Exception $e) {
    if (env('DEBUG', FALSE) == TRUE) {
        throw $e;
    } else {
        echo 'Error Processing Request';
    }

    exit;
}