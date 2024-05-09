let myMap = new Map();
myMap.set(12, '12');
myMap.set(true, 69);
myMap.set('gold', 525);

for (let value of myMap.keys()){
    console.log("Ключ - "+value + "   Значение - " + myMap.get(value));
}