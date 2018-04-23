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

function currentLine() {
  if (katzDeli.length > 1) {
    var arr = [];
    for (let i = 0; i < katzDeli.length; i++) {
      arr.push((i + 1) + '. ' + katzDeli[i]);
    }
    return 'The line is currently: ' + arr.join(', ');
  }
}