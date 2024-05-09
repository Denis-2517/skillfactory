let x = null;
 if (typeof x === 'number') {
   console.log('x-цифры');
 }
else if (typeof x === 'string') {
   console.log('x-строка');
 }
 else if (typeof x === 'bool', 'object', 'undefined', 'null') {
    console.log('Тип x не определён');
 }
