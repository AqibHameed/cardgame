# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# [:user, :admin, :contact, :user].each do |role|
#   Role.find_or_create_by_name({ name: role }, without_protection: true)
# end
admin1=User.create!(email: 'strippals-admin@gmail.com',
                    password: '1231231')
admin2=User.create!(email: 'strippals-admin1@gmail.com',
                    password: '1231231')

saleman1=User.create!(email: 'strippals-saleman@gmail.com',
                    password: '1231231')
saleman2=User.create!(email: 'strippals-saleman1@gmail.com',
                      password: '1231231')


user1=User.create!(email: 'strippals-user@gmail.com',
                      password: '1231231')
user2=User.create!(email: 'strippals-user1@gmail.com',
                   password: '1231231')


admin1.add_role :admin
admin2.add_role :admin

saleman1.add_role :saleman
saleman2.add_role :saleman

user1.add_role :user
user2.add_role :user

Game.create!(gamename: 'Ace Of Spades')
Game.create!(gamename: 'King Of Spades')
Game.create!(gamename: 'Queen Of Spades')
Game.create!(gamename: 'Jack Of Spades')
PackagePlan.create!(numberofgames: 5,
                    amount: 0.5,
                    game_id: 1,
                    active: true)
PackagePlan.create!(numberofgames: 3,
                    amount: 0.5,
                    game_id: 2)
PackagePlan.create!(numberofgames: 2,
                    amount: 0.5,
                    game_id: 3)
PackagePlan.create!(numberofgames: 1,
                    amount: 0.5,
                    game_id: 4)