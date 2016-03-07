/**
 * Created by littleworld on 23/02/16.
 */

var mongoose = require('mongoose');

var todoSchema =  new mongoose.Schema ({
  task: { type: String,  default: '' }
});

module.exports = mongoose.model('Todo', todoSchema);

