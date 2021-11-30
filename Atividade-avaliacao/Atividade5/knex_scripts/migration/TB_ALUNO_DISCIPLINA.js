ports.up = function(knex, Promise) {
    return knex.schema.createTable('TB_USUARIOS_PERFIS', table => {
        table.integer('aluno_id').unsigned()
        table.integer('disciplina_id').unsigned()
        table.foreign('aluno_id').references('TB_ALUNOS.id')
        table.foreign('disciplina_id').references('TB_DISCIPLINA.id')
        table.primary(['aluno_id', 'disciplina_id'])
	table.interger('nota').notnull()
	table.interger('periodo').notnull()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('TB_ALUNO_DISCIPLINA')
};