const fs = require('fs');

module.exports = class MyClass {
  read() {
    return fs.readFileSync('whatever','utf-8')
  }
}
