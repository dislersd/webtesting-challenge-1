module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  return { ...item };
}

function fail(item) {
  return { ...item };
}

class Item {
  constructor(props) {
    this.durability = props.durability;
  }
}


function repair(item) {
  item.durability = 100
  console.log(item);
  return { item };
}



function get(item) {
  return { ...item };
}
