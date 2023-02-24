/**
*
* @param mixed[data] element to check of
*
* @param array[iteratingKeys] bool||array[] check keys
*
* @param array[keyExists] if iteratingKeys are asigned but one of the keys dont exists will return false
*
*               @example Empty({key1: "", key2:""},true) @return true
*
*               @example Empty({key1: "", key2:""},['x']) @return false//because key "x" dont exists
*
*               @example Empty({key1: "", key2:""},['x'],true) @return true//because key "x" dont exists
*
* @return mixed (data)
*
*/

const Empty = (data, iteratingKeys = null, keyExists = null) => {
    
    const BaseEmpty = (data) => {

        if(data === null) return true;

        if(Array.isArray(data)){
            const n = data.length;
            if (n === 0)  return true;
        }
        switch (typeof  data) {
            case 'string':
                var str = data.replace(/\s+/g,'' );
                if (data === '') return true;
                break;

            case 'number':
                if (data === 0) return true;
                break;

            case 'undefined':
                return true;
                break;


            case 'object':
                var str = JSON.stringify(data);
                if (str.length < 5) return true;
                break;

            default:
                break;
        }
        return false;
    }
    
    if(iteratingKeys && typeof data === 'object'){

        
        var total = 0;
        

        var newData = data;
        if(Array.isArray(data)){
            newData = Object.assign({}, data)
        }


        if(iteratingKeys === true){
            
            for (const key in newData) {
                if (Object.hasOwnProperty.call(newData, key)) {
                    const el = newData[key];
                    if(BaseEmpty(el) === true){
                        total++
                    }
                    
                }
            }
        }
        
        if(Array.isArray(iteratingKeys)){

            for (let i = 0; i < iteratingKeys.length; i++) {
                var key = iteratingKeys[i];
                if(typeof key !== 'number' && typeof key !== 'string'){
                    continue;
                } 
                key = key.toString();

                if (Object.hasOwnProperty.call(newData, key)) {
                    const el = newData[key];
                    if(BaseEmpty(el) === true){
                        total++
                    }
                    
                }else{
                    if(keyExists){
                        return true;
                    }
                }

            }

        }

        if(total > 0){
            return true;
        }
    }
    return BaseEmpty(data)
}

export default Empty;
