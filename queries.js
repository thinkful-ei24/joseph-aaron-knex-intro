'use strict';

const { DATABASE } = require('./config');
const knex = require('knex')(DATABASE);

// clear the console (just a convenience)
process.stdout.write('\x1Bc');

// Sample select 
// knex
//   .select()
//   .from('restaurants')
//   .limit(2)
//   .debug(true)
//   .then(results => console.log(results));

knex('restaurants')
  .count()
  .where({cuisine: 'Thai'})
  .then(results => console.log(results[0].count));


// knex
//   .select('id', 'name')
//   .from('restaurants')
//   .whereIn('address_zipcode', ['10012', '10013', '10014'])
//   .where({
//     cuisine: 'Italian'
//   })
//   .orderBy('name')
//   .limit(5)
//   .debug(true)
//   .then(results => console.log(results));

// knex('restaurants')
//   .insert({
//     name: 'Byte Cafe',
//     borough: 'Brooklyn',
//     cuisine: 'coffee',
//     address_building_number: '123',
//     address_street: 'Atlantic Avenue',
//     address_zipcode: '11231',
//   })
//   .returning(['id', 'name'])
//   .then(results => console.log(JSON.stringify(results)));

// knex('restaurants')
//   .insert([
//     {
//     name: 'Byte Cafe',
//     borough: 'Brooklyn',
//     cuisine: 'coffee',
//     address_building_number: '123',
//     address_street: 'Atlantic Avenue',
//     address_zipcode: '11231'
//     },

//     {
//       name: 'Another Cafe',
//       borough: 'Brooklyn',
//       cuisine: 'coffee',
//       address_building_number: '567',
//       address_street: 'Atlantic Avenue',
//       address_zipcode: '78900'
//       },

//       {
//         name: 'Pizza Place',
//         borough: 'Bronx',
//         cuisine: 'pizza',
//         address_building_number: '987',
//         address_street: 'Atlantic Avenue',
//         address_zipcode: '45856'
//         },
//   ])
//   .returning(['id', 'name'])
//   .then(results => console.log(JSON.stringify(results)));

// knex('restaurants')
//   .where({nyc_restaurant_id: '30191841'})
//   .update({name: 'DJ Reynolds Pub and Restaurant'})
//   .returning(['id', 'name'])
//   .then(results => console.log(JSON.stringify(results)));

// knex('grades')
//   .where({id: '3'})
//   .returning('*')
//   .del()
//   .then(results => console.log(JSON.stringify(results)));