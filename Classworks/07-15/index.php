<?php
//
////phpinfo();
//
//echo 'Hello world';
//print 'Labas pasauli';
//
//var_dump('Hello world');
//
////Variables
//$_name = 'Benas';
//
////Names have to start with letter or underscore _
//var_dump($_name);
//
//$_name2 = 'Juskus';
//
//var_dump($_name2);
//
//var_dump($_name . $_name2);

$digit = 8;
$letter = 'K';
$empty = null;

var_dump($digit, $letter, $empty);
$string = 'Testing this text';

var_dump(substr($string, -3));


function negative($number)
{
    return $number * -1;
}

var_dump(negative(5));