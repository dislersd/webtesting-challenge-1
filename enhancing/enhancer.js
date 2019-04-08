module.exports = {
  succeed,
  fail,
  repair,
  get
};

function succeed(item) {
  item.enhancement < 20 ? (item.enhancement += 1) : null;
  return { ...item };
}

function fail(item) {
  if (item.enhancement < 15 ) {
    item.durability -= 5;
  } else if (item.enhancement >= 15 && item.enhancement < 17) {
    item.durability -= 10;
  } else if (item.enhancement > 16) {
    item.enhancement -= 1;
  }
  return { ...item };
}

function repair(item) {
  item.durability = 100;
  return { ...item };
}

function get(item) {
  let {enhancement, name} = item;
  if (enhancement === 0) {
    return {...item}
  } else if (enhancement > 0) {
    name = `[+${enhancement}]${name}`
  }
  return { ...item, name };
}
const spear = {
  name: "spear",
  enhancement: 2,
  durability: 100
}
console.log(get(spear)); 