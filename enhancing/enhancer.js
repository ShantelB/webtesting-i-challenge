module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if(item.enhancement === 20){
    return item
  } else if(item.enhancement <= 19){
    item.enhancement = item.enhancement + 1;
    // return item.enhancement + 1
     return { ...item };
  }
}

function fail(item) {
  if(item.enhancement < 15 ){
    item.durabilty = item.durabilty - 5;
    return item ;
  } else if (item.enhancement > 15){
    item.durabilty = item.durabilty - 10;
    return item;
  } else if (item.enhancement > 16){
    item.enhancement = item.enhancement - 1;
    return item ;
  }
}

function repair(item) {
  const newItem = item
  newItem.durabilty = 100
  return { ...newItem };
}

function get(item) {
  return { ...item };
}
