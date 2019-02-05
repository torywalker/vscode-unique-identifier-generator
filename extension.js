const vscode = require('vscode');
const ULID = require('ulid');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	let disposable = vscode.commands.registerCommand('extension.generateUlid', function () {
		generateUlid();
	});

	context.subscriptions.push(disposable);
}

function generateUlid() {
	const editor = vscode.window.activeTextEditor;
	editor.edit(
    edit => editor.selections.forEach(
      selection => {
        edit.delete(selection);
        edit.insert(selection.start, ULID.ulid());
      }
    )
  );
}

exports.activate = activate;
