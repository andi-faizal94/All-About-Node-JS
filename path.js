const path = require('path');

console.log(path.sep);

const filePath = path.join('contact', 'subfolder', 'text.md');
console.log(filePath);

const base = path.basename(filePath);
console.log(base);
