<?php

require 'index.html';
//var_dump($_POST);

session_start();

if(isset($_POST['number1'], $_POST['number2'])) {
    if (is_numeric($_POST['number1']) && is_numeric($_POST['number2'])) {
        if ($_POST['equation'] == 'x') {
            echo $_POST['number1'] * $_POST['number2'];
        } if ($_POST['equation'] == '/') {
            echo $_POST['number1'] / $_POST['number2'];
        } if ($_POST['equation'] == '+') {
            echo $_POST['number1'] + $_POST['number2'];
        } if ($_POST['equation'] == '-') {
            echo $_POST['number1'] - $_POST['number2'];
        } if ($_POST['equation'] == 'squared') {
            echo $_POST['number1'] ** 2;
            echo '<br>';
            echo $_POST['number2'] ** 2;
        }
    }
}