'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class C2Schema extends Schema {
  up () {
    this.create('c_2_s', (table) => {
      table.increments()
      table.timestamps()
      table.string("uid").notNullable().unique()
      table.string("os")
      table.string("hostname")
      table.string("ip")
      table.string("port")

    })
  }

  down () {
    this.drop('c_2_s')
  }
}

module.exports = C2Schema
