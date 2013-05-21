Brackets Delete to Line Start/End extension
===========================================

This extension adds two shortcuts to Adobe Brackets. The shortcuts are for:
 - deleting from the current cursor location to the start of the current line
 - deleting from the current cursor location to the end of the current line

When deleting to the start of the line, the extension uses a "smart start" algorithm to delete the text but leave any leading whitespace. (Run the command again to delete to the absolute start of the line.)

## Key Bindings ##

In addition to adding items to the Edit menu (mostly for discoverability), this extension defines the following keyboard shortcuts:

### Mac ###

 - Cmd+Backspace: Delete from the cursor to the start of the line
 - Cmd+Delete: Delete from the cursor to the end of the line

### Windows ###

 - Alt+Backspace: Delete from the cursor to the start of the line
 - Alt+Delete: Delete from the cursor to the end of the line

### Why I chose these key commands ###

I am primarily a Mac user, especially for code editing. The Cmd+Delete and Cmd+Backspace shortcuts are some of the ones I use most frequently. They are pretty standard on the Mac in code and text editing applications such as Sublime Text 2, TextEdit, Eclipse, Chrome (url bar and dev tools), and even MS Outlook. However, these shortcuts don't exist in CodeMirror/Brackets, so I decided to add them.

For Windows, I'm not aware of any "standard" keyboard shortcuts for these commands, so I just chose Alt+Backspace and Alt+Delete since they are conceptually similar. They also seemed like an appropriate choice since Ctrl+Backspace/Ctrl+Delete are the standard shortcuts in Windows for the "delete word" commands, which are mapped to Alt+Backspace/Alt+Delete on the Mac. If you are a Windows user and you have a suggestion for an alternative key combination, I'd be happy to hear your suggestions.

## License ##
MIT license
