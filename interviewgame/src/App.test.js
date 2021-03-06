import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// log(name); // output: ReferenceError: name is not defined

const tinyize = function(name) {
  log(name); // output: 'Rick'

  // log(myName); // output: ReferenceError: myName is not defined
  const myName = "Tiny " + name + "!";
  log(myName); // output: 'Tiny Rick!'

  return myName;
};

const name = tinyize("Rick");
log(name); // output: 'Tiny Rick!'
// log(myName); // output: ReferenceError: myName is not defined

// log(i); // output: ReferenceError: i is not defined
for (let i = 0; i < 5; i++) {
  setTimeout(function() {
    log(i); // output: 0, 1, 2, 3, 4
  }, 100);
}
// log(i); // output: ReferenceError: i is not defined

// helper function to log current line number
function log(string) {
  const callerLine = new Error().stack.split("\n")[2];
  const lineNumber = callerLine.match(/:(\d+):\d+\)/)[1];
  console.log("Line " + lineNumber + ": " + string);
}

// log(name); // output: ReferenceError: name is not defined

const tinyize = function(name) {
  log(name); // output: 'Rick'

  // log(myName); // output: ReferenceError: myName is not defined
  const myName = "Tiny " + name + "!";
  log(myName); // output: 'Tiny Rick!'

  return myName;
};

const name = tinyize("Rick");
log(name); // output: 'Tiny Rick!'
// log(myName); // output: ReferenceError: myName is not defined

// log(i); // output: ReferenceError: i is not defined
for (let i = 0; i < 5; i++) {
  setTimeout(function() {
    log(i); // output: 0, 1, 2, 3, 4
  }, 100);
}
// log(i); // output: ReferenceError: i is not defined

// helper function to log current line number
function log(string) {
  const callerLine = new Error().stack.split("\n")[2];
  const lineNumber = callerLine.match(/:(\d+):\d+\)/)[1];
  console.log("Line " + lineNumber + ": " + string);
}

// log(name); // output: ReferenceError: name is not defined

const tinyize = function(name) {
  log(name); // output: 'Rick'

  // log(myName); // output: ReferenceError: myName is not defined
  const myName = "Tiny " + name + "!";
  log(myName); // output: 'Tiny Rick!'

  return myName;
};

const name = tinyize("Rick");
log(name); // output: 'Tiny Rick!'
// log(myName); // output: ReferenceError: myName is not defined

// log(i); // output: ReferenceError: i is not defined
for (let i = 0; i < 5; i++) {
  setTimeout(function() {
    log(i); // output: 0, 1, 2, 3, 4
  }, 100);
}
// log(i); // output: ReferenceError: i is not defined

// helper function to log current line number
function log(string) {
  const callerLine = new Error().stack.split("\n")[2];
  const lineNumber = callerLine.match(/:(\d+):\d+\)/)[1];
  console.log("Line " + lineNumber + ": " + string);
}

// log(name); // output: ReferenceError: name is not defined

const tinyize = function(name) {
  log(name); // output: 'Rick'

  // log(myName); // output: ReferenceError: myName is not defined
  const myName = "Tiny " + name + "!";
  log(myName); // output: 'Tiny Rick!'

  return myName;
};

const name = tinyize("Rick");
log(name); // output: 'Tiny Rick!'
// log(myName); // output: ReferenceError: myName is not defined

// log(i); // output: ReferenceError: i is not defined
for (let i = 0; i < 5; i++) {
  setTimeout(function() {
    log(i); // output: 0, 1, 2, 3, 4
  }, 100);
}
// log(i); // output: ReferenceError: i is not defined

// helper function to log current line number
function log(string) {
  const callerLine = new Error().stack.split("\n")[2];
  const lineNumber = callerLine.match(/:(\d+):\d+\)/)[1];
  console.log("Line " + lineNumber + ": " + string);
}

// log(name); // output: ReferenceError: name is not defined

const tinyize = function(name) {
  log(name); // output: 'Rick'

  // log(myName); // output: ReferenceError: myName is not defined
  const myName = "Tiny " + name + "!";
  log(myName); // output: 'Tiny Rick!'

  return myName;
};

const name = tinyize("Rick");
log(name); // output: 'Tiny Rick!'
// log(myName); // output: ReferenceError: myName is not defined

// log(i); // output: ReferenceError: i is not defined
for (let i = 0; i < 5; i++) {
  setTimeout(function() {
    log(i); // output: 0, 1, 2, 3, 4
  }, 100);
}
// log(i); // output: ReferenceError: i is not defined

// helper function to log current line number
function log(string) {
  const callerLine = new Error().stack.split("\n")[2];
  const lineNumber = callerLine.match(/:(\d+):\d+\)/)[1];
  console.log("Line " + lineNumber + ": " + string);
}

// log(name); // output: ReferenceError: name is not defined

const tinyize = function(name) {
  log(name); // output: 'Rick'

  // log(myName); // output: ReferenceError: myName is not defined
  const myName = "Tiny " + name + "!";
  log(myName); // output: 'Tiny Rick!'

  return myName;
};

const name = tinyize("Rick");
log(name); // output: 'Tiny Rick!'
// log(myName); // output: ReferenceError: myName is not defined

// log(i); // output: ReferenceError: i is not defined
for (let i = 0; i < 5; i++) {
  setTimeout(function() {
    log(i); // output: 0, 1, 2, 3, 4
  }, 100);
}
// log(i); // output: ReferenceError: i is not defined

// helper function to log current line number
function log(string) {
  const callerLine = new Error().stack.split("\n")[2];
  const lineNumber = callerLine.match(/:(\d+):\d+\)/)[1];
  console.log("Line " + lineNumber + ": " + string);
}

// log(name); // output: ReferenceError: name is not defined

const tinyize = function(name) {
  log(name); // output: 'Rick'

  // log(myName); // output: ReferenceError: myName is not defined
  const myName = "Tiny " + name + "!";
  log(myName); // output: 'Tiny Rick!'

  return myName;
};

const name = tinyize("Rick");
log(name); // output: 'Tiny Rick!'
// log(myName); // output: ReferenceError: myName is not defined

// log(i); // output: ReferenceError: i is not defined
for (let i = 0; i < 5; i++) {
  setTimeout(function() {
    log(i); // output: 0, 1, 2, 3, 4
  }, 100);
}
// log(i); // output: ReferenceError: i is not defined

// helper function to log current line number
function log(string) {
  const callerLine = new Error().stack.split("\n")[2];
  const lineNumber = callerLine.match(/:(\d+):\d+\)/)[1];
  console.log("Line " + lineNumber + ": " + string);
}

// log(name); // output: ReferenceError: name is not defined

const tinyize = function(name) {
  log(name); // output: 'Rick'

  // log(myName); // output: ReferenceError: myName is not defined
  const myName = "Tiny " + name + "!";
  log(myName); // output: 'Tiny Rick!'

  return myName;
};

const name = tinyize("Rick");
log(name); // output: 'Tiny Rick!'
// log(myName); // output: ReferenceError: myName is not defined

// log(i); // output: ReferenceError: i is not defined
for (let i = 0; i < 5; i++) {
  setTimeout(function() {
    log(i); // output: 0, 1, 2, 3, 4
  }, 100);
}
// log(i); // output: ReferenceError: i is not defined

// helper function to log current line number
function log(string) {
  const callerLine = new Error().stack.split("\n")[2];
  const lineNumber = callerLine.match(/:(\d+):\d+\)/)[1];
  console.log("Line " + lineNumber + ": " + string);
}

// log(name); // output: ReferenceError: name is not defined

const tinyize = function(name) {
  log(name); // output: 'Rick'

  // log(myName); // output: ReferenceError: myName is not defined
  const myName = "Tiny " + name + "!";
  log(myName); // output: 'Tiny Rick!'

  return myName;
};

const name = tinyize("Rick");
log(name); // output: 'Tiny Rick!'
// log(myName); // output: ReferenceError: myName is not defined

// log(i); // output: ReferenceError: i is not defined
for (let i = 0; i < 5; i++) {
  setTimeout(function() {
    log(i); // output: 0, 1, 2, 3, 4
  }, 100);
}
// log(i); // output: ReferenceError: i is not defined

// helper function to log current line number
function log(string) {
  const callerLine = new Error().stack.split("\n")[2];
  const lineNumber = callerLine.match(/:(\d+):\d+\)/)[1];
  console.log("Line " + lineNumber + ": " + string);
}

// log(name); // output: ReferenceError: name is not defined

const tinyize = function(name) {
  log(name); // output: 'Rick'

  // log(myName); // output: ReferenceError: myName is not defined
  const myName = "Tiny " + name + "!";
  log(myName); // output: 'Tiny Rick!'

  return myName;
};

const name = tinyize("Rick");
log(name); // output: 'Tiny Rick!'
// log(myName); // output: ReferenceError: myName is not defined

// log(i); // output: ReferenceError: i is not defined
for (let i = 0; i < 5; i++) {
  setTimeout(function() {
    log(i); // output: 0, 1, 2, 3, 4
  }, 100);
}
// log(i); // output: ReferenceError: i is not defined

// helper function to log current line number
function log(string) {
  const callerLine = new Error().stack.split("\n")[2];
  const lineNumber = callerLine.match(/:(\d+):\d+\)/)[1];
  console.log("Line " + lineNumber + ": " + string);
}

// log(name); // output: ReferenceError: name is not defined

const tinyize = function(name) {
  log(name); // output: 'Rick'

  // log(myName); // output: ReferenceError: myName is not defined
  const myName = "Tiny " + name + "!";
  log(myName); // output: 'Tiny Rick!'

  return myName;
};

const name = tinyize("Rick");
log(name); // output: 'Tiny Rick!'
// log(myName); // output: ReferenceError: myName is not defined

// log(i); // output: ReferenceError: i is not defined
for (let i = 0; i < 5; i++) {
  setTimeout(function() {
    log(i); // output: 0, 1, 2, 3, 4
  }, 100);
}
// log(i); // output: ReferenceError: i is not defined

// helper function to log current line number
function log(string) {
  const callerLine = new Error().stack.split("\n")[2];
  const lineNumber = callerLine.match(/:(\d+):\d+\)/)[1];
  console.log("Line " + lineNumber + ": " + string);
}

// log(name); // output: ReferenceError: name is not defined

const tinyize = function(name) {
  log(name); // output: 'Rick'

  // log(myName); // output: ReferenceError: myName is not defined
  const myName = "Tiny " + name + "!";
  log(myName); // output: 'Tiny Rick!'

  return myName;
};

const name = tinyize("Rick");
log(name); // output: 'Tiny Rick!'
// log(myName); // output: ReferenceError: myName is not defined

// log(i); // output: ReferenceError: i is not defined
for (let i = 0; i < 5; i++) {
  setTimeout(function() {
    log(i); // output: 0, 1, 2, 3, 4
  }, 100);
}
// log(i); // output: ReferenceError: i is not defined

// helper function to log current line number
function log(string) {
  const callerLine = new Error().stack.split("\n")[2];
  const lineNumber = callerLine.match(/:(\d+):\d+\)/)[1];
  console.log("Line " + lineNumber + ": " + string);
}

// log(name); // output: ReferenceError: name is not defined

const tinyize = function(name) {
  log(name); // output: 'Rick'

  // log(myName); // output: ReferenceError: myName is not defined
  const myName = "Tiny " + name + "!";
  log(myName); // output: 'Tiny Rick!'

  return myName;
};

const name = tinyize("Rick");
log(name); // output: 'Tiny Rick!'
// log(myName); // output: ReferenceError: myName is not defined

// log(i); // output: ReferenceError: i is not defined
for (let i = 0; i < 5; i++) {
  setTimeout(function() {
    log(i); // output: 0, 1, 2, 3, 4
  }, 100);
}
// log(i); // output: ReferenceError: i is not defined

// helper function to log current line number
function log(string) {
  const callerLine = new Error().stack.split("\n")[2];
  const lineNumber = callerLine.match(/:(\d+):\d+\)/)[1];
  console.log("Line " + lineNumber + ": " + string);
}

// log(name); // output: ReferenceError: name is not defined

const tinyize = function(name) {
  log(name); // output: 'Rick'

  // log(myName); // output: ReferenceError: myName is not defined
  const myName = "Tiny " + name + "!";
  log(myName); // output: 'Tiny Rick!'

  return myName;
};

const name = tinyize("Rick");
log(name); // output: 'Tiny Rick!'
// log(myName); // output: ReferenceError: myName is not defined

// log(i); // output: ReferenceError: i is not defined
for (let i = 0; i < 5; i++) {
  setTimeout(function() {
    log(i); // output: 0, 1, 2, 3, 4
  }, 100);
}
// log(i); // output: ReferenceError: i is not defined

// helper function to log current line number
function log(string) {
  const callerLine = new Error().stack.split("\n")[2];
  const lineNumber = callerLine.match(/:(\d+):\d+\)/)[1];
  console.log("Line " + lineNumber + ": " + string);
}

// log(name); // output: ReferenceError: name is not defined

const tinyize = function(name) {
  log(name); // output: 'Rick'

  // log(myName); // output: ReferenceError: myName is not defined
  const myName = "Tiny " + name + "!";
  log(myName); // output: 'Tiny Rick!'

  return myName;
};

const name = tinyize("Rick");
log(name); // output: 'Tiny Rick!'
// log(myName); // output: ReferenceError: myName is not defined

// log(i); // output: ReferenceError: i is not defined
for (let i = 0; i < 5; i++) {
  setTimeout(function() {
    log(i); // output: 0, 1, 2, 3, 4
  }, 100);
}
// log(i); // output: ReferenceError: i is not defined

// helper function to log current line number
function log(string) {
  const callerLine = new Error().stack.split("\n")[2];
  const lineNumber = callerLine.match(/:(\d+):\d+\)/)[1];
  console.log("Line " + lineNumber + ": " + string);
}

// log(name); // output: ReferenceError: name is not defined

const tinyize = function(name) {
  log(name); // output: 'Rick'

  // log(myName); // output: ReferenceError: myName is not defined
  const myName = "Tiny " + name + "!";
  log(myName); // output: 'Tiny Rick!'

  return myName;
};

const name = tinyize("Rick");
log(name); // output: 'Tiny Rick!'
// log(myName); // output: ReferenceError: myName is not defined

// log(i); // output: ReferenceError: i is not defined
for (let i = 0; i < 5; i++) {
  setTimeout(function() {
    log(i); // output: 0, 1, 2, 3, 4
  }, 100);
}
// log(i); // output: ReferenceError: i is not defined

// helper function to log current line number
function log(string) {
  const callerLine = new Error().stack.split("\n")[2];
  const lineNumber = callerLine.match(/:(\d+):\d+\)/)[1];
  console.log("Line " + lineNumber + ": " + string);
}

// log(name); // output: ReferenceError: name is not defined

const tinyize = function(name) {
  log(name); // output: 'Rick'

  // log(myName); // output: ReferenceError: myName is not defined
  const myName = "Tiny " + name + "!";
  log(myName); // output: 'Tiny Rick!'

  return myName;
};

const name = tinyize("Rick");
log(name); // output: 'Tiny Rick!'
// log(myName); // output: ReferenceError: myName is not defined

// log(i); // output: ReferenceError: i is not defined
for (let i = 0; i < 5; i++) {
  setTimeout(function() {
    log(i); // output: 0, 1, 2, 3, 4
  }, 100);
}
// log(i); // output: ReferenceError: i is not defined

// helper function to log current line number
function log(string) {
  const callerLine = new Error().stack.split("\n")[2];
  const lineNumber = callerLine.match(/:(\d+):\d+\)/)[1];
  console.log("Line " + lineNumber + ": " + string);
}

// log(name); // output: ReferenceError: name is not defined

const tinyize = function(name) {
  log(name); // output: 'Rick'

  // log(myName); // output: ReferenceError: myName is not defined
  const myName = "Tiny " + name + "!";
  log(myName); // output: 'Tiny Rick!'

  return myName;
};

const name = tinyize("Rick");
log(name); // output: 'Tiny Rick!'
// log(myName); // output: ReferenceError: myName is not defined

// log(i); // output: ReferenceError: i is not defined
for (let i = 0; i < 5; i++) {
  setTimeout(function() {
    log(i); // output: 0, 1, 2, 3, 4
  }, 100);
}
// log(i); // output: ReferenceError: i is not defined

// helper function to log current line number
function log(string) {
  const callerLine = new Error().stack.split("\n")[2];
  const lineNumber = callerLine.match(/:(\d+):\d+\)/)[1];
  console.log("Line " + lineNumber + ": " + string);
}

// log(name); // output: ReferenceError: name is not defined

const tinyize = function(name) {
  log(name); // output: 'Rick'

  // log(myName); // output: ReferenceError: myName is not defined
  const myName = "Tiny " + name + "!";
  log(myName); // output: 'Tiny Rick!'

  return myName;
};

const name = tinyize("Rick");
log(name); // output: 'Tiny Rick!'
// log(myName); // output: ReferenceError: myName is not defined

// log(i); // output: ReferenceError: i is not defined
for (let i = 0; i < 5; i++) {
  setTimeout(function() {
    log(i); // output: 0, 1, 2, 3, 4
  }, 100);
}
// log(i); // output: ReferenceError: i is not defined

// helper function to log current line number
function log(string) {
  const callerLine = new Error().stack.split("\n")[2];
  const lineNumber = callerLine.match(/:(\d+):\d+\)/)[1];
  console.log("Line " + lineNumber + ": " + string);
}

// log(name); // output: ReferenceError: name is not defined

const tinyize = function(name) {
  log(name); // output: 'Rick'

  // log(myName); // output: ReferenceError: myName is not defined
  const myName = "Tiny " + name + "!";
  log(myName); // output: 'Tiny Rick!'

  return myName;
};

const name = tinyize("Rick");
log(name); // output: 'Tiny Rick!'
// log(myName); // output: ReferenceError: myName is not defined

// log(i); // output: ReferenceError: i is not defined
for (let i = 0; i < 5; i++) {
  setTimeout(function() {
    log(i); // output: 0, 1, 2, 3, 4
  }, 100);
}
// log(i); // output: ReferenceError: i is not defined

// helper function to log current line number
function log(string) {
  const callerLine = new Error().stack.split("\n")[2];
  const lineNumber = callerLine.match(/:(\d+):\d+\)/)[1];
  console.log("Line " + lineNumber + ": " + string);
}

// log(name); // output: ReferenceError: name is not defined

const tinyize = function(name) {
  log(name); // output: 'Rick'

  // log(myName); // output: ReferenceError: myName is not defined
  const myName = "Tiny " + name + "!";
  log(myName); // output: 'Tiny Rick!'

  return myName;
};

const name = tinyize("Rick");
log(name); // output: 'Tiny Rick!'
// log(myName); // output: ReferenceError: myName is not defined

// log(i); // output: ReferenceError: i is not defined
for (let i = 0; i < 5; i++) {
  setTimeout(function() {
    log(i); // output: 0, 1, 2, 3, 4
  }, 100);
}
// log(i); // output: ReferenceError: i is not defined

// helper function to log current line number
function log(string) {
  const callerLine = new Error().stack.split("\n")[2];
  const lineNumber = callerLine.match(/:(\d+):\d+\)/)[1];
  console.log("Line " + lineNumber + ": " + string);
}

// log(name); // output: ReferenceError: name is not defined

const tinyize = function(name) {
  log(name); // output: 'Rick'

  // log(myName); // output: ReferenceError: myName is not defined
  const myName = "Tiny " + name + "!";
  log(myName); // output: 'Tiny Rick!'

  return myName;
};

const name = tinyize("Rick");
log(name); // output: 'Tiny Rick!'
// log(myName); // output: ReferenceError: myName is not defined

// log(i); // output: ReferenceError: i is not defined
for (let i = 0; i < 5; i++) {
  setTimeout(function() {
    log(i); // output: 0, 1, 2, 3, 4
  }, 100);
}
// log(i); // output: ReferenceError: i is not defined

// helper function to log current line number
function log(string) {
  const callerLine = new Error().stack.split("\n")[2];
  const lineNumber = callerLine.match(/:(\d+):\d+\)/)[1];
  console.log("Line " + lineNumber + ": " + string);
}

// log(name); // output: ReferenceError: name is not defined

const tinyize = function(name) {
  log(name); // output: 'Rick'

  // log(myName); // output: ReferenceError: myName is not defined
  const myName = "Tiny " + name + "!";
  log(myName); // output: 'Tiny Rick!'

  return myName;
};

const name = tinyize("Rick");
log(name); // output: 'Tiny Rick!'
// log(myName); // output: ReferenceError: myName is not defined

// log(i); // output: ReferenceError: i is not defined
for (let i = 0; i < 5; i++) {
  setTimeout(function() {
    log(i); // output: 0, 1, 2, 3, 4
  }, 100);
}
// log(i); // output: ReferenceError: i is not defined

// helper function to log current line number
function log(string) {
  const callerLine = new Error().stack.split("\n")[2];
  const lineNumber = callerLine.match(/:(\d+):\d+\)/)[1];
  console.log("Line " + lineNumber + ": " + string);
}

// log(name); // output: ReferenceError: name is not defined

const tinyize = function(name) {
  log(name); // output: 'Rick'

  // log(myName); // output: ReferenceError: myName is not defined
  const myName = "Tiny " + name + "!";
  log(myName); // output: 'Tiny Rick!'

  return myName;
};

const name = tinyize("Rick");
log(name); // output: 'Tiny Rick!'
// log(myName); // output: ReferenceError: myName is not defined

// log(i); // output: ReferenceError: i is not defined
for (let i = 0; i < 5; i++) {
  setTimeout(function() {
    log(i); // output: 0, 1, 2, 3, 4
  }, 100);
}
// log(i); // output: ReferenceError: i is not defined

// helper function to log current line number
function log(string) {
  const callerLine = new Error().stack.split("\n")[2];
  const lineNumber = callerLine.match(/:(\d+):\d+\)/)[1];
  console.log("Line " + lineNumber + ": " + string);
}

// log(name); // output: ReferenceError: name is not defined

const tinyize = function(name) {
  log(name); // output: 'Rick'

  // log(myName); // output: ReferenceError: myName is not defined
  const myName = "Tiny " + name + "!";
  log(myName); // output: 'Tiny Rick!'

  return myName;
};

const name = tinyize("Rick");
log(name); // output: 'Tiny Rick!'
// log(myName); // output: ReferenceError: myName is not defined

// log(i); // output: ReferenceError: i is not defined
for (let i = 0; i < 5; i++) {
  setTimeout(function() {
    log(i); // output: 0, 1, 2, 3, 4
  }, 100);
}
// log(i); // output: ReferenceError: i is not defined

// helper function to log current line number
function log(string) {
  const callerLine = new Error().stack.split("\n")[2];
  const lineNumber = callerLine.match(/:(\d+):\d+\)/)[1];
  console.log("Line " + lineNumber + ": " + string);
}

// log(name); // output: ReferenceError: name is not defined

const tinyize = function(name) {
  log(name); // output: 'Rick'

  // log(myName); // output: ReferenceError: myName is not defined
  const myName = "Tiny " + name + "!";
  log(myName); // output: 'Tiny Rick!'

  return myName;
};

const name = tinyize("Rick");
log(name); // output: 'Tiny Rick!'
// log(myName); // output: ReferenceError: myName is not defined

// log(i); // output: ReferenceError: i is not defined
for (let i = 0; i < 5; i++) {
  setTimeout(function() {
    log(i); // output: 0, 1, 2, 3, 4
  }, 100);
}
// log(i); // output: ReferenceError: i is not defined

// helper function to log current line number
function log(string) {
  const callerLine = new Error().stack.split("\n")[2];
  const lineNumber = callerLine.match(/:(\d+):\d+\)/)[1];
  console.log("Line " + lineNumber + ": " + string);
}

// log(name); // output: ReferenceError: name is not defined

const tinyize = function(name) {
  log(name); // output: 'Rick'

  // log(myName); // output: ReferenceError: myName is not defined
  const myName = "Tiny " + name + "!";
  log(myName); // output: 'Tiny Rick!'

  return myName;
};

const name = tinyize("Rick");
log(name); // output: 'Tiny Rick!'
// log(myName); // output: ReferenceError: myName is not defined

// log(i); // output: ReferenceError: i is not defined
for (let i = 0; i < 5; i++) {
  setTimeout(function() {
    log(i); // output: 0, 1, 2, 3, 4
  }, 100);
}
// log(i); // output: ReferenceError: i is not defined

// helper function to log current line number
function log(string) {
  const callerLine = new Error().stack.split("\n")[2];
  const lineNumber = callerLine.match(/:(\d+):\d+\)/)[1];
  console.log("Line " + lineNumber + ": " + string);
}

// log(name); // output: ReferenceError: name is not defined

const tinyize = function(name) {
  log(name); // output: 'Rick'

  // log(myName); // output: ReferenceError: myName is not defined
  const myName = "Tiny " + name + "!";
  log(myName); // output: 'Tiny Rick!'

  return myName;
};

const name = tinyize("Rick");
log(name); // output: 'Tiny Rick!'
// log(myName); // output: ReferenceError: myName is not defined

// log(i); // output: ReferenceError: i is not defined
for (let i = 0; i < 5; i++) {
  setTimeout(function() {
    log(i); // output: 0, 1, 2, 3, 4
  }, 100);
}
// log(i); // output: ReferenceError: i is not defined

// helper function to log current line number
function log(string) {
  const callerLine = new Error().stack.split("\n")[2];
  const lineNumber = callerLine.match(/:(\d+):\d+\)/)[1];
  console.log("Line " + lineNumber + ": " + string);
}

// log(name); // output: ReferenceError: name is not defined

const tinyize = function(name) {
  log(name); // output: 'Rick'

  // log(myName); // output: ReferenceError: myName is not defined
  const myName = "Tiny " + name + "!";
  log(myName); // output: 'Tiny Rick!'

  return myName;
};

const name = tinyize("Rick");
log(name); // output: 'Tiny Rick!'
// log(myName); // output: ReferenceError: myName is not defined

// log(i); // output: ReferenceError: i is not defined
for (let i = 0; i < 5; i++) {
  setTimeout(function() {
    log(i); // output: 0, 1, 2, 3, 4
  }, 100);
}
// log(i); // output: ReferenceError: i is not defined

// helper function to log current line number
function log(string) {
  const callerLine = new Error().stack.split("\n")[2];
  const lineNumber = callerLine.match(/:(\d+):\d+\)/)[1];
  console.log("Line " + lineNumber + ": " + string);
}

// log(name); // output: ReferenceError: name is not defined

const tinyize = function(name) {
  log(name); // output: 'Rick'

  // log(myName); // output: ReferenceError: myName is not defined
  const myName = "Tiny " + name + "!";
  log(myName); // output: 'Tiny Rick!'

  return myName;
};

const name = tinyize("Rick");
log(name); // output: 'Tiny Rick!'
// log(myName); // output: ReferenceError: myName is not defined

// log(i); // output: ReferenceError: i is not defined
for (let i = 0; i < 5; i++) {
  setTimeout(function() {
    log(i); // output: 0, 1, 2, 3, 4
  }, 100);
}
// log(i); // output: ReferenceError: i is not defined

// helper function to log current line number
function log(string) {
  const callerLine = new Error().stack.split("\n")[2];
  const lineNumber = callerLine.match(/:(\d+):\d+\)/)[1];
  console.log("Line " + lineNumber + ": " + string);
}

// log(name); // output: ReferenceError: name is not defined

const tinyize = function(name) {
  log(name); // output: 'Rick'

  // log(myName); // output: ReferenceError: myName is not defined
  const myName = "Tiny " + name + "!";
  log(myName); // output: 'Tiny Rick!'

  return myName;
};

const name = tinyize("Rick");
log(name); // output: 'Tiny Rick!'
// log(myName); // output: ReferenceError: myName is not defined

// log(i); // output: ReferenceError: i is not defined
for (let i = 0; i < 5; i++) {
  setTimeout(function() {
    log(i); // output: 0, 1, 2, 3, 4
  }, 100);
}
// log(i); // output: ReferenceError: i is not defined

// helper function to log current line number
function log(string) {
  const callerLine = new Error().stack.split("\n")[2];
  const lineNumber = callerLine.match(/:(\d+):\d+\)/)[1];
  console.log("Line " + lineNumber + ": " + string);
}

// log(name); // output: ReferenceError: name is not defined

const tinyize = function(name) {
  log(name); // output: 'Rick'

  // log(myName); // output: ReferenceError: myName is not defined
  const myName = "Tiny " + name + "!";
  log(myName); // output: 'Tiny Rick!'

  return myName;
};

const name = tinyize("Rick");
log(name); // output: 'Tiny Rick!'
// log(myName); // output: ReferenceError: myName is not defined

// log(i); // output: ReferenceError: i is not defined
for (let i = 0; i < 5; i++) {
  setTimeout(function() {
    log(i); // output: 0, 1, 2, 3, 4
  }, 100);
}
// log(i); // output: ReferenceError: i is not defined

// helper function to log current line number
function log(string) {
  const callerLine = new Error().stack.split("\n")[2];
  const lineNumber = callerLine.match(/:(\d+):\d+\)/)[1];
  console.log("Line " + lineNumber + ": " + string);
}

// log(name); // output: ReferenceError: name is not defined

const tinyize = function(name) {
  log(name); // output: 'Rick'

  // log(myName); // output: ReferenceError: myName is not defined
  const myName = "Tiny " + name + "!";
  log(myName); // output: 'Tiny Rick!'

  return myName;
};

const name = tinyize("Rick");
log(name); // output: 'Tiny Rick!'
// log(myName); // output: ReferenceError: myName is not defined

// log(i); // output: ReferenceError: i is not defined
for (let i = 0; i < 5; i++) {
  setTimeout(function() {
    log(i); // output: 0, 1, 2, 3, 4
  }, 100);
}
// log(i); // output: ReferenceError: i is not defined

// helper function to log current line number
function log(string) {
  const callerLine = new Error().stack.split("\n")[2];
  const lineNumber = callerLine.match(/:(\d+):\d+\)/)[1];
  console.log("Line " + lineNumber + ": " + string);
}

// log(name); // output: ReferenceError: name is not defined

const tinyize = function(name) {
  log(name); // output: 'Rick'

  // log(myName); // output: ReferenceError: myName is not defined
  const myName = "Tiny " + name + "!";
  log(myName); // output: 'Tiny Rick!'

  return myName;
};

const name = tinyize("Rick");
log(name); // output: 'Tiny Rick!'
// log(myName); // output: ReferenceError: myName is not defined

// log(i); // output: ReferenceError: i is not defined
for (let i = 0; i < 5; i++) {
  setTimeout(function() {
    log(i); // output: 0, 1, 2, 3, 4
  }, 100);
}
// log(i); // output: ReferenceError: i is not defined

// helper function to log current line number
function log(string) {
  const callerLine = new Error().stack.split("\n")[2];
  const lineNumber = callerLine.match(/:(\d+):\d+\)/)[1];
  console.log("Line " + lineNumber + ": " + string);
}

// log(name); // output: ReferenceError: name is not defined

const tinyize = function(name) {
  log(name); // output: 'Rick'

  // log(myName); // output: ReferenceError: myName is not defined
  const myName = "Tiny " + name + "!";
  log(myName); // output: 'Tiny Rick!'

  return myName;
};

const name = tinyize("Rick");
log(name); // output: 'Tiny Rick!'
// log(myName); // output: ReferenceError: myName is not defined

// log(i); // output: ReferenceError: i is not defined
for (let i = 0; i < 5; i++) {
  setTimeout(function() {
    log(i); // output: 0, 1, 2, 3, 4
  }, 100);
}
// log(i); // output: ReferenceError: i is not defined

// helper function to log current line number
function log(string) {
  const callerLine = new Error().stack.split("\n")[2];
  const lineNumber = callerLine.match(/:(\d+):\d+\)/)[1];
  console.log("Line " + lineNumber + ": " + string);
}

// log(name); // output: ReferenceError: name is not defined

const tinyize = function(name) {
  log(name); // output: 'Rick'

  // log(myName); // output: ReferenceError: myName is not defined
  const myName = "Tiny " + name + "!";
  log(myName); // output: 'Tiny Rick!'

  return myName;
};

const name = tinyize("Rick");
log(name); // output: 'Tiny Rick!'
// log(myName); // output: ReferenceError: myName is not defined

// log(i); // output: ReferenceError: i is not defined
for (let i = 0; i < 5; i++) {
  setTimeout(function() {
    log(i); // output: 0, 1, 2, 3, 4
  }, 100);
}
// log(i); // output: ReferenceError: i is not defined

// helper function to log current line number
function log(string) {
  const callerLine = new Error().stack.split("\n")[2];
  const lineNumber = callerLine.match(/:(\d+):\d+\)/)[1];
  console.log("Line " + lineNumber + ": " + string);
}

// log(name); // output: ReferenceError: name is not defined

const tinyize = function(name) {
  log(name); // output: 'Rick'

  // log(myName); // output: ReferenceError: myName is not defined
  const myName = "Tiny " + name + "!";
  log(myName); // output: 'Tiny Rick!'

  return myName;
};

const name = tinyize("Rick");
log(name); // output: 'Tiny Rick!'
// log(myName); // output: ReferenceError: myName is not defined

// log(i); // output: ReferenceError: i is not defined
for (let i = 0; i < 5; i++) {
  setTimeout(function() {
    log(i); // output: 0, 1, 2, 3, 4
  }, 100);
}
// log(i); // output: ReferenceError: i is not defined

// helper function to log current line number
function log(string) {
  const callerLine = new Error().stack.split("\n")[2];
  const lineNumber = callerLine.match(/:(\d+):\d+\)/)[1];
  console.log("Line " + lineNumber + ": " + string);
}

// log(name); // output: ReferenceError: name is not defined

const tinyize = function(name) {
  log(name); // output: 'Rick'

  // log(myName); // output: ReferenceError: myName is not defined
  const myName = "Tiny " + name + "!";
  log(myName); // output: 'Tiny Rick!'

  return myName;
};

const name = tinyize("Rick");
log(name); // output: 'Tiny Rick!'
// log(myName); // output: ReferenceError: myName is not defined

// log(i); // output: ReferenceError: i is not defined
for (let i = 0; i < 5; i++) {
  setTimeout(function() {
    log(i); // output: 0, 1, 2, 3, 4
  }, 100);
}
// log(i); // output: ReferenceError: i is not defined

// helper function to log current line number
function log(string) {
  const callerLine = new Error().stack.split("\n")[2];
  const lineNumber = callerLine.match(/:(\d+):\d+\)/)[1];
  console.log("Line " + lineNumber + ": " + string);
}

// log(name); // output: ReferenceError: name is not defined

const tinyize = function(name) {
  log(name); // output: 'Rick'

  // log(myName); // output: ReferenceError: myName is not defined
  const myName = "Tiny " + name + "!";
  log(myName); // output: 'Tiny Rick!'

  return myName;
};

const name = tinyize("Rick");
log(name); // output: 'Tiny Rick!'
// log(myName); // output: ReferenceError: myName is not defined

// log(i); // output: ReferenceError: i is not defined
for (let i = 0; i < 5; i++) {
  setTimeout(function() {
    log(i); // output: 0, 1, 2, 3, 4
  }, 100);
}
// log(i); // output: ReferenceError: i is not defined



// log(name); // output: ReferenceError: name is not defined

const tinyize = function(name) {
  log(name); // output: 'Rick'

  // log(myName); // output: ReferenceError: myName is not defined
  const myName = "Tiny " + name + "!";
  log(myName); // output: 'Tiny Rick!'

  return myName;
};

const name = tinyize("Rick");
log(name); // output: 'Tiny Rick!'
// log(myName); // output: ReferenceError: myName is not defined

// log(i); // output: ReferenceError: i is not defined
for (let i = 0; i < 5; i++) {
  setTimeout(function() {
    log(i); // output: 0, 1, 2, 3, 4
  }, 100);
}
// log(i); // output: ReferenceError: i is not defined

// helper function to log current line number
function log(string) {
  const callerLine = new Error().stack.split("\n")[2];
  const lineNumber = callerLine.match(/:(\d+):\d+\)/)[1];
  console.log("Line " + lineNumber + ": " + string);
}

// log(name); // output: ReferenceError: name is not defined

const tinyize = function(name) {
  log(name); // output: 'Rick'

  // log(myName); // output: ReferenceError: myName is not defined
  const myName = "Tiny " + name + "!";
  log(myName); // output: 'Tiny Rick!'

  return myName;
};

const name = tinyize("Rick");
log(name); // output: 'Tiny Rick!'
// log(myName); // output: ReferenceError: myName is not defined

// log(i); // output: ReferenceError: i is not defined
for (let i = 0; i < 5; i++) {
  setTimeout(function() {
    log(i); // output: 0, 1, 2, 3, 4
  }, 100);
}
// log(i); // output: ReferenceError: i is not defined

// helper function to log current line number
function log(string) {
  const callerLine = new Error().stack.split("\n")[2];
  const lineNumber = callerLine.match(/:(\d+):\d+\)/)[1];
  console.log("Line " + lineNumber + ": " + string);
}

// log(name); // output: ReferenceError: name is not defined

const tinyize = function(name) {
  log(name); // output: 'Rick'

  // log(myName); // output: ReferenceError: myName is not defined
  const myName = "Tiny " + name + "!";
  log(myName); // output: 'Tiny Rick!'

  return myName;
};

const name = tinyize("Rick");
log(name); // output: 'Tiny Rick!'
// log(myName); // output: ReferenceError: myName is not defined

// log(i); // output: ReferenceError: i is not defined
for (let i = 0; i < 5; i++) {
  setTimeout(function() {
    log(i); // output: 0, 1, 2, 3, 4
  }, 100);
}
// log(i); // output: ReferenceError: i is not defined

// helper function to log current line number
function log(string) {
  const callerLine = new Error().stack.split("\n")[2];
  const lineNumber = callerLine.match(/:(\d+):\d+\)/)[1];
  console.log("Line " + lineNumber + ": " + string);
}

// log(name); // output: ReferenceError: name is not defined

const tinyize = function(name) {
  log(name); // output: 'Rick'

  // log(myName); // output: ReferenceError: myName is not defined
  const myName = "Tiny " + name + "!";
  log(myName); // output: 'Tiny Rick!'

  return myName;
};

const name = tinyize("Rick");
log(name); // output: 'Tiny Rick!'
// log(myName); // output: ReferenceError: myName is not defined

// log(i); // output: ReferenceError: i is not defined
for (let i = 0; i < 5; i++) {
  setTimeout(function() {
    log(i); // output: 0, 1, 2, 3, 4
  }, 100);
}
// log(i); // output: ReferenceError: i is not defined

// helper function to log current line number
function log(string) {
  const callerLine = new Error().stack.split("\n")[2];
  const lineNumber = callerLine.match(/:(\d+):\d+\)/)[1];
  console.log("Line " + lineNumber + ": " + string);
}

// log(name); // output: ReferenceError: name is not defined

const tinyize = function(name) {
  log(name); // output: 'Rick'

  // log(myName); // output: ReferenceError: myName is not defined
  const myName = "Tiny " + name + "!";
  log(myName); // output: 'Tiny Rick!'

  return myName;
};

const name = tinyize("Rick");
log(name); // output: 'Tiny Rick!'
// log(myName); // output: ReferenceError: myName is not defined

// log(i); // output: ReferenceError: i is not defined
for (let i = 0; i < 5; i++) {
  setTimeout(function() {
    log(i); // output: 0, 1, 2, 3, 4
  }, 100);
}
// log(i); // output: ReferenceError: i is not defined

// helper function to log current line number
function log(string) {
  const callerLine = new Error().stack.split("\n")[2];
  const lineNumber = callerLine.match(/:(\d+):\d+\)/)[1];
  console.log("Line " + lineNumber + ": " + string);
}

// log(name); // output: ReferenceError: name is not defined

const tinyize = function(name) {
  log(name); // output: 'Rick'

  // log(myName); // output: ReferenceError: myName is not defined
  const myName = "Tiny " + name + "!";
  log(myName); // output: 'Tiny Rick!'

  return myName;
};

const name = tinyize("Rick");
log(name); // output: 'Tiny Rick!'
// log(myName); // output: ReferenceError: myName is not defined

// log(i); // output: ReferenceError: i is not defined
for (let i = 0; i < 5; i++) {
  setTimeout(function() {
    log(i); // output: 0, 1, 2, 3, 4
  }, 100);
}
// log(i); // output: ReferenceError: i is not defined

// helper function to log current line number
function log(string) {
  const callerLine = new Error().stack.split("\n")[2];
  const lineNumber = callerLine.match(/:(\d+):\d+\)/)[1];
  console.log("Line " + lineNumber + ": " + string);
}

// log(name); // output: ReferenceError: name is not defined

const tinyize = function(name) {
  log(name); // output: 'Rick'

  // log(myName); // output: ReferenceError: myName is not defined
  const myName = "Tiny " + name + "!";
  log(myName); // output: 'Tiny Rick!'

  return myName;
};

const name = tinyize("Rick");
log(name); // output: 'Tiny Rick!'
// log(myName); // output: ReferenceError: myName is not defined

// log(i); // output: ReferenceError: i is not defined
for (let i = 0; i < 5; i++) {
  setTimeout(function() {
    log(i); // output: 0, 1, 2, 3, 4
  }, 100);
}
// log(i); // output: ReferenceError: i is not defined

// helper function to log current line number
function log(string) {
  const callerLine = new Error().stack.split("\n")[2];
  const lineNumber = callerLine.match(/:(\d+):\d+\)/)[1];
  console.log("Line " + lineNumber + ": " + string);
}

// log(name); // output: ReferenceError: name is not defined

const tinyize = function(name) {
  log(name); // output: 'Rick'

  // log(myName); // output: ReferenceError: myName is not defined
  const myName = "Tiny " + name + "!";
  log(myName); // output: 'Tiny Rick!'

  return myName;
};

const name = tinyize("Rick");
log(name); // output: 'Tiny Rick!'
// log(myName); // output: ReferenceError: myName is not defined

// log(i); // output: ReferenceError: i is not defined
for (let i = 0; i < 5; i++) {
  setTimeout(function() {
    log(i); // output: 0, 1, 2, 3, 4
  }, 100);
}
// log(i); // output: ReferenceError: i is not defined

// helper function to log current line number
function log(string) {
  const callerLine = new Error().stack.split("\n")[2];
  const lineNumber = callerLine.match(/:(\d+):\d+\)/)[1];
  console.log("Line " + lineNumber + ": " + string);
}

// log(name); // output: ReferenceError: name is not defined

const tinyize = function(name) {
  log(name); // output: 'Rick'

  // log(myName); // output: ReferenceError: myName is not defined
  const myName = "Tiny " + name + "!";
  log(myName); // output: 'Tiny Rick!'

  return myName;
};

const name = tinyize("Rick");
log(name); // output: 'Tiny Rick!'
// log(myName); // output: ReferenceError: myName is not defined

// log(i); // output: ReferenceError: i is not defined
for (let i = 0; i < 5; i++) {
  setTimeout(function() {
    log(i); // output: 0, 1, 2, 3, 4
  }, 100);
}
// log(i); // output: ReferenceError: i is not defined

// helper function to log current line number
function log(string) {
  const callerLine = new Error().stack.split("\n")[2];
  const lineNumber = callerLine.match(/:(\d+):\d+\)/)[1];
  console.log("Line " + lineNumber + ": " + string);
}

// log(name); // output: ReferenceError: name is not defined

const tinyize = function(name) {
  log(name); // output: 'Rick'

  // log(myName); // output: ReferenceError: myName is not defined
  const myName = "Tiny " + name + "!";
  log(myName); // output: 'Tiny Rick!'

  return myName;
};

const name = tinyize("Rick");
log(name); // output: 'Tiny Rick!'
// log(myName); // output: ReferenceError: myName is not defined

// log(i); // output: ReferenceError: i is not defined
for (let i = 0; i < 5; i++) {
  setTimeout(function() {
    log(i); // output: 0, 1, 2, 3, 4
  }, 100);
}
// log(i); // output: ReferenceError: i is not defined

// helper function to log current line number
function log(string) {
  const callerLine = new Error().stack.split("\n")[2];
  const lineNumber = callerLine.match(/:(\d+):\d+\)/)[1];
  console.log("Line " + lineNumber + ": " + string);
}

// log(name); // output: ReferenceError: name is not defined

const tinyize = function(name) {
  log(name); // output: 'Rick'

  // log(myName); // output: ReferenceError: myName is not defined
  const myName = "Tiny " + name + "!";
  log(myName); // output: 'Tiny Rick!'

  return myName;
};

const name = tinyize("Rick");
log(name); // output: 'Tiny Rick!'
// log(myName); // output: ReferenceError: myName is not defined

// log(i); // output: ReferenceError: i is not defined
for (let i = 0; i < 5; i++) {
  setTimeout(function() {
    log(i); // output: 0, 1, 2, 3, 4
  }, 100);
}
// log(i); // output: ReferenceError: i is not defined

// helper function to log current line number
function log(string) {
  const callerLine = new Error().stack.split("\n")[2];
  const lineNumber = callerLine.match(/:(\d+):\d+\)/)[1];
  console.log("Line " + lineNumber + ": " + string);
}

// log(name); // output: ReferenceError: name is not defined

const tinyize = function(name) {
  log(name); // output: 'Rick'

  // log(myName); // output: ReferenceError: myName is not defined
  const myName = "Tiny " + name + "!";
  log(myName); // output: 'Tiny Rick!'

  return myName;
};

const name = tinyize("Rick");
log(name); // output: 'Tiny Rick!'
// log(myName); // output: ReferenceError: myName is not defined

// log(i); // output: ReferenceError: i is not defined
for (let i = 0; i < 5; i++) {
  setTimeout(function() {
    log(i); // output: 0, 1, 2, 3, 4
  }, 100);
}
// log(i); // output: ReferenceError: i is not defined

// helper function to log current line number
function log(string) {
  const callerLine = new Error().stack.split("\n")[2];
  const lineNumber = callerLine.match(/:(\d+):\d+\)/)[1];
  console.log("Line " + lineNumber + ": " + string);
}

// log(name); // output: ReferenceError: name is not defined

const tinyize = function(name) {
  log(name); // output: 'Rick'

  // log(myName); // output: ReferenceError: myName is not defined
  const myName = "Tiny " + name + "!";
  log(myName); // output: 'Tiny Rick!'

  return myName;
};

const name = tinyize("Rick");
log(name); // output: 'Tiny Rick!'
// log(myName); // output: ReferenceError: myName is not defined

// log(i); // output: ReferenceError: i is not defined
for (let i = 0; i < 5; i++) {
  setTimeout(function() {
    log(i); // output: 0, 1, 2, 3, 4
  }, 100);
}
// log(i); // output: ReferenceError: i is not defined

// helper function to log current line number
function log(string) {
  const callerLine = new Error().stack.split("\n")[2];
  const lineNumber = callerLine.match(/:(\d+):\d+\)/)[1];
  console.log("Line " + lineNumber + ": " + string);
}

// log(name); // output: ReferenceError: name is not defined

const tinyize = function(name) {
  log(name); // output: 'Rick'

  // log(myName); // output: ReferenceError: myName is not defined
  const myName = "Tiny " + name + "!";
  log(myName); // output: 'Tiny Rick!'

  return myName;
};

const name = tinyize("Rick");
log(name); // output: 'Tiny Rick!'
// log(myName); // output: ReferenceError: myName is not defined

// log(i); // output: ReferenceError: i is not defined
for (let i = 0; i < 5; i++) {
  setTimeout(function() {
    log(i); // output: 0, 1, 2, 3, 4
  }, 100);
}
// log(i); // output: ReferenceError: i is not defined

// helper function to log current line number
function log(string) {
  const callerLine = new Error().stack.split("\n")[2];
  const lineNumber = callerLine.match(/:(\d+):\d+\)/)[1];
  console.log("Line " + lineNumber + ": " + string);
}


// helper function to log current line number
function log(string) {
  const callerLine = new Error().stack.split("\n")[2];
  const lineNumber = callerLine.match(/:(\d+):\d+\)/)[1];
  console.log("Line " + lineNumber + ": " + string);
}
/ Function Expression
const multiply1 = function(a, b) {
  return a * b;
};

// Arrow Function Expression
const multiply2 = (a, b) => {
  return a * b;
};

multiply2(2, 3); // 6 - called the same way as usual

// Arrow Function Expression - concise
const multiply3 = (a, b) => a * b;
// without curly brackets, the return statement is implied

// can omit the parenthesis if there's only a single parameter
const square = x => x * x;


// Note: there's no arrow-function equivalent of function declarations
function multiply4(a, b) {
  return a * b;
}

// ¯\_(ツ)_/¯
/ Function Expression
const multiply1 = function(a, b) {
  return a * b;
};

// Arrow Function Expression
const multiply2 = (a, b) => {
  return a * b;
};

multiply2(2, 3); // 6 - called the same way as usual

// Arrow Function Expression - concise
const multiply3 = (a, b) => a * b;
// without curly brackets, the return statement is implied

// can omit the parenthesis if there's only a single parameter
const square = x => x * x;


// Note: there's no arrow-function equivalent of function declarations
function multiply4(a, b) {
  return a * b;
}

// ¯\_(ツ)_/¯
/ Function Expression
const multiply1 = function(a, b) {
  return a * b;
};

// Arrow Function Expression
const multiply2 = (a, b) => {
  return a * b;
};

multiply2(2, 3); // 6 - called the same way as usual

// Arrow Function Expression - concise
const multiply3 = (a, b) => a * b;
// without curly brackets, the return statement is implied

// can omit the parenthesis if there's only a single parameter
const square = x => x * x;


// Note: there's no arrow-function equivalent of function declarations
function multiply4(a, b) {
  return a * b;
}

// ¯\_(ツ)_/¯
/ Function Expression
const multiply1 = function(a, b) {
  return a * b;
};

// Arrow Function Expression
const multiply2 = (a, b) => {
  return a * b;
};

multiply2(2, 3); // 6 - called the same way as usual

// Arrow Function Expression - concise
const multiply3 = (a, b) => a * b;
// without curly brackets, the return statement is implied

// can omit the parenthesis if there's only a single parameter
const square = x => x * x;


// Note: there's no arrow-function equivalent of function declarations
function multiply4(a, b) {
  return a * b;
}

// ¯\_(ツ)_/¯
/ Function Expression
const multiply1 = function(a, b) {
  return a * b;
};

// Arrow Function Expression
const multiply2 = (a, b) => {
  return a * b;
};

multiply2(2, 3); // 6 - called the same way as usual

// Arrow Function Expression - concise
const multiply3 = (a, b) => a * b;
// without curly brackets, the return statement is implied

// can omit the parenthesis if there's only a single parameter
const square = x => x * x;


// Note: there's no arrow-function equivalent of function declarations
function multiply4(a, b) {
  return a * b;
}

// ¯\_(ツ)_/¯
/ Function Expression
const multiply1 = function(a, b) {
  return a * b;
};

// Arrow Function Expression
const multiply2 = (a, b) => {
  return a * b;
};

multiply2(2, 3); // 6 - called the same way as usual

// Arrow Function Expression - concise
const multiply3 = (a, b) => a * b;
// without curly brackets, the return statement is implied

// can omit the parenthesis if there's only a single parameter
const square = x => x * x;


// Note: there's no arrow-function equivalent of function declarations
function multiply4(a, b) {
  return a * b;
}

// ¯\_(ツ)_/¯
/ Function Expression
const multiply1 = function(a, b) {
  return a * b;
};

// Arrow Function Expression
const multiply2 = (a, b) => {
  return a * b;
};

multiply2(2, 3); // 6 - called the same way as usual

// Arrow Function Expression - concise
const multiply3 = (a, b) => a * b;
// without curly brackets, the return statement is implied

// can omit the parenthesis if there's only a single parameter
const square = x => x * x;


// Note: there's no arrow-function equivalent of function declarations
function multiply4(a, b) {
  return a * b;
}

// ¯\_(ツ)_/¯
