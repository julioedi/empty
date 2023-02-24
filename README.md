# Examples
Basic empty function with iterations
```js
//basic
Empty('');
Empty(null);
Empty(0);

//array
Empty([]);
Empty(['']);
Empty(['','']);
Empty(['hola','mundo',''],[2]);


//object
Empty({});
Empty({hello:"",world:""},true);
Empty({hello:"hola",world:""},['world']);

//all above will return true
```
