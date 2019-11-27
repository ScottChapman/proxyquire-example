const proxyquire = require('proxyquire');

const fakeFS = {
  readFileSync: () => "some text",
};

const tester = proxyquire('./MyClass', {
  'fs': fakeFS,
});

const result = tester.read();
console.dir(result);
