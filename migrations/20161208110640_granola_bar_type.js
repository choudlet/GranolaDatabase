
exports.up = function(knex, Promise) {
  return knex.schema.createTable('granola_bar_type', table =>{
    table.increments();
    table.string('BrandName');
    table.string('BarName');
    table.string('MouthFeel');
    table.boolean('GlutenFree');
    table.boolean('NutFree');
    table.boolean('DairyFree');

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('granola_bar_type');
};
