const fs = require('fs')

fs.writeFileSync('notes.txt', 'My name is Xavi.')

fs.appendFileSync('notes.txt', 'This is an appended message to notes.txt, widh appendFileSync')