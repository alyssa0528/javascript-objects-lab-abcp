var recipes = {
  flour: '2 cups',
  eggs: '4',
  sugar: '1 cup'
};

function updateObjectWithKeyAndValue(object, key, value) {
  Object.assign({}, object, {key: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  delete     
}

function destructivelyDeleteFromObjectByKey(object, key, value) {
  delete object[key];
  return object;
}