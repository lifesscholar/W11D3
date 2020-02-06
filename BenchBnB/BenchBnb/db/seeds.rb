# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

benches = Bench.create([
  {description: "A beautiful view of the city from Beacon Trail", lat: 37.740687, lng: -122.434527}, 
  {description: "At the side of Resovoir Park in the Sunset District", lat: 37.751638, lng: -122.485879},
  {description: "A nice one right next to Sunset Blvd", lat: 37.754916, lng: -122.494985}
])
