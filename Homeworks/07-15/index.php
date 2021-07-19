<?php

//Sukurkite 3 kintamuosius: skaičių, raidinės vertės bei tuščią kintamąjį ir juos išveskite į ekraną.

$digit = 8;
$letter = 'K';
$empty = null;

var_dump($digit, $letter, $empty);

//Parašykite skriptą, kuris išspausdintų paskutiniąsias 3 stringo raides.

$string = 'Testing this text';

var_dump(substr($string, -3));

//Sukurkite funkciją negative, kuri priimtų vieną argumentą "$skaicius" ir išvestų į ekraną atitinkamą neigiamą skaičių. (Įvedame 3, išveda -3)

function negative($number)
{
    return $number * -1;
}

var_dump(negative(5));

//Sukurkite funkciją kauliukas, kuri imituotų kauliuko metimą. (Į ekraną atspaudintų atsitiktinį skaičių nuo 1 iki 6); Užuomina: rand();

//$dice = [1, 2, 3, 4, 5, 6];

function diceroll()
{
    echo rand(1, 6);
}

echo (diceroll());
//Parašykite funkciją pusePloto, kuri priimtų 2 argumentus ir išvestų į ekraną pusę abiejų skaičių sandaugą.
echo ('<br>');
function halfarea($length, $width)
{
    $resultHalf = $length * $width / 2;
    echo ($length . " ilgio ir " . $width . " pločio ploto pusė yra: " . $resultHalf);
}

echo halfarea(25, 37);

echo("<br>");
//Sukurkite funkciją 'arEsiDarJaunas', kuri priimtų vieną argumentą amžius ir į ekraną išvestų pranešimą, kiek metų trūksta iki 100. (Pvž.: "Iki šimto jūms trūksta 70 metų! Dar gyventi liko daug!")

function areYouStillYoung($age)
{
    $until = 100 - $age;
    echo ("Iki šimto jūms trūksta ". $until . " metų! Dar gyventi liko daug!");
}

echo (areYouStillYoung(30));

echo("<br>");

//Sukurkite funkciją, kuri priimtų argumentą farenheitas ir laipsnius iš farenheito konvertuotų į celsijų.

function tempConvert($fDegree)
{
    $cDegree = ($fDegree - 32) * 5 / 9;
    echo ($fDegree. " laipsnių F yra ". $cDegree . " laipsnių C");
}

echo (tempConvert(32));