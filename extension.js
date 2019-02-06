const vscode = require('vscode');
const ULID = require('ulid');
const uuidv1 = require('uuid/v1');
const uuidv4 = require('uuid/v4');

/**
 * Activate the extension
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  const commands = [
    { name: 'extension.generateUlid', func: function () { generateUlid(); } },
    { name: 'extension.generateUuidV1', func: function () { generateUuidV1(); } },
    { name: 'extension.generateUuidV4', func: function () { generateUuidV4(); } },
  ];

  commands.forEach(({ name, func }) => {
    context.subscriptions.push(
      vscode.commands.registerCommand(name, func)
    );
  });
}

/**
 * Add Unique Identifier in place of selection
 * @param {string} identifier
 */
function generate(identifier) {
  const editor = vscode.window.activeTextEditor;

  editor.edit(
    edit => editor.selections.forEach(
      selection => {
        edit.delete(selection);
        edit.insert(selection.start, identifier);
      }
    )
  );

  return identifier;
}

/**
 * Generate a ULID
 */
function generateUlid() {
  return generate(ULID.ulid());
}

/**
 * Generate a UUID v1 (Timestamp)
 */
function generateUuidV1() {
  return generate(uuidv1());
}

/**
 * Generate a UUID v4 (Random)
 */
function generateUuidV4() {
  return generate(uuidv4());
}

exports.activate = activate;

module.exports = {
  activate,
  generate,
  generateUlid,
  generateUuidV1,
  generateUuidV4,
};
