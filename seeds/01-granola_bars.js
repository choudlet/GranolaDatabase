
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('granola_bar_type').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('granola_bar_type').insert({ BrandName: 'Nature Valley', BarName: "Peanut Butter Crunch", MouthFeel: "Crunchy", GlutenFree: false, NutFree: false, DairyFree: false}),
        knex('granola_bar_type').insert({ BrandName: 'Larabar', BarName: "Cashew Cookie", MouthFeel: "Soft", GlutenFree: true, NutFree: false, DairyFree: true}),
        knex('granola_bar_type').insert({ BrandName: 'LunaBar', BarName: "Chocolate Magic", MouthFeel: "Soft", GlutenFree: true, NutFree: true, DairyFree: false}),
        knex('granola_bar_type').insert({ BrandName: 'Quaker Oatmeal', BarName: "Smores", MouthFeel: "Soft", GlutenFree: false, NutFree: false, DairyFree: false}),
      ]);
    });
};
