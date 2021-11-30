exports.up = function(knex, Promise) {
    return knex.schema.createTable('TB_DISCIPLINA', table => {
        table.increments('id').primary()
        table.string('nome').notNull().unique()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('TB_PERFIS')
};