exports.up = async (knex) => {
    await knex.schema
      .createTable('users', table => {
        table.increments('user_id')
        table.string('username', 15).notNullable().unique()
        table.string('password', 200).notNullable()
      })
      .createTable('daily', table => {
        table.increments('daily_id')
        table.string('athletic_greens').defaultTo(false)
        table.string('pushups').defaultTo(false)
        table.string('vipassana').defaultTo(false)
        table.string('run').defaultTo(false)
        table.string('sucs').defaultTo(false)
        table.string('floss').defaultTo(false)
        // delete below - this is adding brian user to sucs tracking
        
      })
      .createTable('monthly', table => {
        table.increments('monthly_id')
        table.string('bills').defaultTo(false)
        table.string('savings').defaultTo(false)
        table.string('bitcoin').defaultTo(false)
        table.string('credit card').defaultTo(false)
      })
  }
  
  exports.down = async (knex) => {
    await knex.schema.dropTableIfExists('monthly')
    await knex.schema.dropTableIfExists('daily')
    await knex.schema.dropTableIfExists('users')
  }
  