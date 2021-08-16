<?php

if (function_exists('env') == FALSE) {
    function env($name, $default = FALSE) {
        if (isset(_ENV[$name])) {
            return _ENV[$name];
        }

        return $default;
    }
} else {
    echo '"env" function exists';

    exit;
}

if (function_exists('dd') == FALSE) {
    function dd() {
        array_map(function ($x) {
            var_dump($x);
        }, func_get_args());

        die(1);
    }
}