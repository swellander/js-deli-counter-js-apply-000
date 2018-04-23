var katzDeliLine = [];

function takeANumber(line, name) {
  line.push(name);
  return 'Welcome, ' + name + '. You are number ' + line.length + ' in line.'
}

function nowServing(line) {
  console.log(katzDeliLine);
  if (line.length === 0) {
    return 'There is nobody waiting to be served!';
  } else {
    return 'Currently serving ' + line.shift() + '.';
  }
}

function currentLine() {
  if (katzDeliLine.length > 1) {
    var arr = [];
    for (let i = 0; i < katzDeliLine.length; i++) {
      arr.push((i + 1) + '. ' + katzDeliLine[i]);
    }
    return 'The line is currently: ' + arr.join(', ');
  } else {
    return 'The line is currently empty.';
  }
}
