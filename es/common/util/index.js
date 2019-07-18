var toString = Object.prototype.toString;

export function ObjTostring(obj){
  return toString.call(obj).slice(8,-1);
}

export function isArray(arr){
  return arr instanceof Array && ObjTostring(arr) === 'Array';
}

export function isObject(obj){
  return obj !== null && ObjTostring(obj) === 'Object';
}

export function keys(obj){
  var allKey = [];
  var key;
  if(!isObject(obj))return allKey;
  for(key in obj){
    if(obj.hasOwnProperty(key)){
      allKey.push(key)
    }
  };
  return allKey;
}

export function assign(){
  var result = {};
  var arg = arguments;
  var other = [].slice.call(arg);
  each(other,function( item, index){
    each(item || {}, function(val, key){
        result[key] = val;
    })
  })
  return result;
}

export function each(obj, callback){
  var traverse = obj;
  var index = 0;
  if(isObject(traverse)){
    traverse = keys(traverse);
    for(var len = traverse.length; index < len; index++){
      var item = traverse[index];
      callback(obj[item], item, traverse)
    };
  }else{
    for(var len = traverse.length; index < len; index++){
      var item = traverse[index];
      callback(item, index, traverse)
    };
  }
}