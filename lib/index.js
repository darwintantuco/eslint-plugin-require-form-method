/**
 * @fileoverview Disallow form tags without method post
 * @author Darwin Tantuco
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------
//
// Import all rules in lib/rules
module.exports.rules = requireIndex(__dirname + "/rules");
