/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, $, brackets, window */

/** Adds "Delete to line start" and "Delete to line end" menu items */
define(function (require, exports, module) {
    "use strict";

    var CommandManager  = brackets.getModule("command/CommandManager"),
    EditorManager   = brackets.getModule("editor/EditorManager"),
    DocumentManager = brackets.getModule("document/DocumentManager"),
    Menus           = brackets.getModule("command/Menus"),
    DELETE_TO_START_COMMAND_ID      = "probertson.deleteToLineStart",
    DELETE_TO_END_COMMAND_ID      = "probertson.deleteToLineEnd";

    CommandManager.register("Delete To Line Start",
                            DELETE_TO_START_COMMAND_ID,
                            deleteToLineStart);
    CommandManager.register("Delete To Line End",
                            DELETE_TO_END_COMMAND_ID,
                            deleteToLineEnd);

    function deleteToLineStart() {
        var cm = EditorManager.getFocusedEditor()._codeMirror;
        var from = cm.getCursor(true), to = cm.getCursor(false), sel = !posEq(from, to);
        if (sel) {
            cm.replaceRange("", from, to, "+delete");
        }
        else if (from.ch == 0) {
            cm.replaceRange("", from, Pos(from.line - 1, cm.getLine(from.line - 1).length), "+delete");
        }
        else {
            // "start smart" position algorithm adapted from CodeMirror's goLineStartSmart() function
            var start = Pos(from.line, 0);//lineStart(cm, from.line);
            var line = cm.getLineHandle(start.line);
            var firstNonWS = Math.max(0, line.text.search(/\S/));
            var inWS = from.line == start.line && from.ch <= firstNonWS && from.ch;
            cm.replaceRange("", from, Pos(from.line, inWS ? 0 : firstNonWS), "+delete");
       }
    }

    function deleteToLineEnd() {
        var cm = EditorManager.getFocusedEditor()._codeMirror;
        CodeMirror.commands.killLine(cm);
    }
    
    function posEq(a, b) {
        return a.line == b.line && a.ch == b.ch;
    }
    
    function Pos(line, ch) {
        return new CodeMirror.Pos(line, ch);
    }

    var menu = Menus.getMenu(Menus.AppMenuBar.EDIT_MENU);
    menu.addMenuItem(DELETE_TO_START_COMMAND_ID,
                     [{key: "Alt-Backspace", platform: "win"},
                      {key: "Cmd-Backspace", platform: "mac"}]);
    menu.addMenuItem(DELETE_TO_END_COMMAND_ID,
                     [{key: "Alt-Delete", platform: "win"},
                      {key: "Cmd-Delete", platform: "mac"}]);

});
