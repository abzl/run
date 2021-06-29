# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Review.destroy_all
Sneaker.destroy_all
User.destroy_all

@user = User.create!(username: 'Loon', email: 'loon@email.com', password: '123456')
puts "#{User.count} users created"

@user = User.create!(username: 'user1', email: 'test@starwar.com', password: 'passw123')
puts "#{User.count} users created"

@shoe = Sneaker.create!(user: @user, name: 'ASICS Gel-Kayano 27', price: 120, features:'' img_url: 'https://cdn.fleetfeet.com/products/1011A767_021_SR_RT_PNG_1280x1280JPG.jpg/width:640-height:480-fit:trim/1011A767_021_SR_RT_PNG_1280x1280JPG.webp?signature=7c7e30a2')
puts "#{Sneaker.count} shoe created"

@shoe = Sneaker.create!(user: @user, name: 'New Balance Fresh Foam More V2', price: 120, features:'', img_url: 'https://cdn.fleetfeet.com/products/mmorgg2_2.jpg/width:640-height:480-fit:trim/mmorgg2_2.webp?signature=1ba1b477')
puts "#{Sneaker.count} shoe created"

@shoe = Sneaker.create!(user: @user, name: 'Nike Air Zoom Pegasus 37', price: 90, features:'', img_url: 'https://cdn.fleetfeet.com/products/BQ9646-102.jpg/width:640-height:480-fit:trim/BQ9646-102.webp?signature=98804122')
puts "#{Sneaker.count} shoe created"

@shoe = Sneaker.create!(user: @user, name: 'Brooks Ghost 13', price: 110, features:'', img_url: 'https://cdn.fleetfeet.com/products/110348_453_L_Ghost_13.jpg/width:640-height:480-fit:trim/110348_453_L_Ghost_13.webp?signature=834f1945')
puts "#{Sneaker.count} shoe created"

@shoe = Sneaker.create!(user: @user, name: 'Brooks Glycerin 18', price: 115, features:'', img_url: 'https://cdn.fleetfeet.com/products/Brooks/Footwear/110329_064_L_Glycerin_18.jpg/width:640-height:480-fit:trim/110329_064_L_Glycerin_18.webp?signature=d759793e')
puts "#{Sneaker.count} shoe created"

@shoe = Sneaker.create!(user: @user, name: 'Hoka One One Clifton 7', price: 110, features:'', img_url: 'https://cdn.fleetfeet.com/products/1110508-MOAN_7.jpg/width:640-height:480-fit:trim/1110508-MOAN_7.webp?signature=d97ca62c')
puts "#{Sneaker.count} shoe created"

@review = Review.create!(content: '', user:@user, sneaker:@shoe)
puts "#{Review.count} review created"
