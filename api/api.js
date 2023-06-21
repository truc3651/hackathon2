'use strict'
require('dotenv').config({path:__dirname+'/../.env'})

module.exports = {
  get: (req, res) => {
    const template = require('./template');
    const output = {
      data: template.template
    }
    console.log(output);
    res.json(output)
  }
}
