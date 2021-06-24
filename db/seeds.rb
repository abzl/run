# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
@user = User.create!(username: 'test', email: 'test@starwar.com', password: 'passw123')
puts "#{User.count} users created"

@shoe = Sneaker.create!(user: @user, name: 'nike air zoom', price: 100, features:'test', img_url: 'https://images.unsplash.com/photo-1579298245158-33e8f568f7d3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmlrZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')
puts "#{Sneaker.count} shoe created"

@review = Review.create!(content: 'another test', user:@user, sneaker:@shoe)
puts "#{Review.count} review created"
