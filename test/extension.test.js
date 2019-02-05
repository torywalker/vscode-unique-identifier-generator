const assert = require('assert');
const extension = require('../extension');

suite("Extension Tests", function() {
  test("Default Test", function() {
    assert.equal(-1, [1, 2, 3].indexOf(5));
    assert.equal(-1, [1, 2, 3].indexOf(0));
  });

  test("Generate a new ULID", function () {
    const ulid = extension.generateUlid();
    assert.strictEqual(26, ulid.length)
  });

  test("Generate a new UUID v1 (Timestamp)", function () {
    const uuid = extension.generateUuidV1();
    assert.strictEqual(36, uuid.length);
    assert.strictEqual(5, uuid.split('-').length);
  });

  test("Generate a new UUID v4 (Random)", function () {
    const uuid = extension.generateUuidV4();
    assert.strictEqual(36, uuid.length);
    assert.strictEqual(5, uuid.split('-').length);
  });
});
