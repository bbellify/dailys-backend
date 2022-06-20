
exports.seed = async function(knex) {
    await knex('users').insert([
        {
            username: 'brian',
            password: 'tester',
        }
    ])
};