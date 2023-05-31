const path = require('path');
 
module.exports = {
  sassOptions: {
    includePaths: [
      path.join(__dirname, 'src/utils/styles'),
      path.join(__dirname, 'src/modules'),
    ],
  },
};
