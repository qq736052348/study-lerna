'use strict';
const one = require('jpp-test-item2')
const axios  = require('axios')

module.exports = jppTestItem1;

function jppTestItem1() {
    one()
    return {
        desc: 'iam a test package'
    }
    // TODO
}
jppTestItem1()
