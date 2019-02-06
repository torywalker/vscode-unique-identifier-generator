const assert = require('assert');
const sinon = require('sinon');
const vscode = require("vscode");
const extension = require('../extension');

const editorSpies = {
  delete: sinon.spy(),
  insert: sinon.spy(),
};

const textEditorMock = {
	document: {
		fileName: 'testfile.js',
		getText: sinon.stub().returns(''),
  },
  edit: function(cb) {
    cb(editorSpies);
  },
  selections: [''],
};

describe('General Tests', function() {
  it('Default Test', function() {
    assert.equal(-1, [1, 2, 3].indexOf(5));
    assert.equal(-1, [1, 2, 3].indexOf(0));
  });
})

describe('Extension Tests', function() {
  const sandbox = sinon.createSandbox();
  sandbox.stub(vscode.window, 'activeTextEditor').value(textEditorMock);

  beforeEach('Reset Spies', function() {
    editorSpies.delete.resetHistory();
    editorSpies.insert.resetHistory();
  });

  it('Generate', function () {
    const generated = extension.generate('1234567890');
    assert.strictEqual(10, generated.length);
    assert.equal(true, editorSpies.delete.calledOnce);
    assert.equal(true, editorSpies.insert.calledOnce);
  });

  it('Generate a new ULID', function () {
    const ulid = extension.generateUlid();
    assert.strictEqual(26, ulid.length);
    assert.equal(true, editorSpies.delete.calledOnce);
    assert.equal(true, editorSpies.insert.calledOnce);
  });

  it('Generate a new UUID v1 (Timestamp)', function () {
    const uuid = extension.generateUuidV1();
    assert.strictEqual(36, uuid.length);
    assert.strictEqual(5, uuid.split('-').length);
    assert.equal(true, editorSpies.delete.calledOnce);
    assert.equal(true, editorSpies.insert.calledOnce);
  });

  it('Generate a new UUID v4 (Random)', function () {
    const uuid = extension.generateUuidV4();
    assert.strictEqual(36, uuid.length);
    assert.strictEqual(5, uuid.split('-').length);
    assert.equal(true, editorSpies.delete.calledOnce);
    assert.equal(true, editorSpies.insert.calledOnce);
  });
});
