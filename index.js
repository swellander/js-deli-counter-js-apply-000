var katzDeli = [];

function takeANumber(line, name) {
  line.push(name);
  return 'Welcome, ' + name + '. You are number ' + line.length + ' in line.'
}

function nowServing() {
  if (katzDeli.length < 1) {
    return 'There is nobody waiting to be served!';
  } else {
    return katzDeli.shift();
  }
}
