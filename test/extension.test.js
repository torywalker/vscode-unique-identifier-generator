const assert = require('assert');
const ULID = require('ulid');

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
// const vscode = require('vscode');
// const myExtension = require('../extension');

suite("Extension Tests", function() {

	// Defines a Mocha unit test
	test("Default Test", function() {
		assert.equal(-1, [1, 2, 3].indexOf(5));
		assert.equal(-1, [1, 2, 3].indexOf(0));
	});

	test("Able to Generate ULID", function () {
		assert.
	});
});
