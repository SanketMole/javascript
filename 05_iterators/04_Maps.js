const map = new Map()

map.set('a',1)
map.set('b',2)
map.set('c',4)
console.log(map.get('c'));
console.log(map)

console.log(map.size);
map.delete('b')
console.log(map);