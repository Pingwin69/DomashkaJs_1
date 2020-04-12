
// 2.Создать объект со значениями температуры в стране. Реализовать код,
// который выведет среднее значение всех стран.
// Код должен работать с различным количеством температур в объекте.


var Terms = {
belarus: 10,
russia: 12,
ukraine: 15,
usa: 12,
 india: 18,
poland: 9
}


var arrayTerms = [20, 13, 17, 25, 36, 18];

var summa = 0;
for( var i = 0; i < arrayTerms.length; i++){
    summa += arrayTerms[i];
}

var result = summa / arrayTerms.length;

alert('Средняя температура стран ' + result);




// 3.Создать функцию, которая принимает в качестве параметра объект term с
// температурами и возвращает максимальную температуру.




var arrayTerms = [20, 13, 17, 25, 36, 18];
var max = 0;
for( var i = 0; i < arrayTerms.length; i++){
    if( max < arrayTerms[i]){
        max = arrayTerms[i];
    }
}

alert('Максимальная температура стран ' + max + ' градусов');


