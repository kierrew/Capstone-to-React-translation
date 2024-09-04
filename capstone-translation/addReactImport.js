const fs = require('fs');
const path = require('path');

const addReactImport = (dir) => {
  fs.readdir(dir, (err, files) => {
    if (err) throw err;

    files.forEach(file => {
      const filePath = path.join(dir, file);
      fs.stat(filePath, (err, stats) => {
        if (err) throw err;

        if (stats.isDirectory()) {
          addReactImport(filePath);
        } else if (path.extname(file) === '.jsx') {
          fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) throw err;

            if (!data.includes("import React from 'react';")) {
              const newData = `import React from 'react';\n${data}`;
              fs.writeFile(filePath, newData, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Updated: ${filePath}`);
              });
            }
          });
        }
      });
    });
  });
};

addReactImport('./src'); // Start from the src directory
