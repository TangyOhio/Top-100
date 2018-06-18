100.times do
  Song.create( name: Faker::Name.name, place: Faker::Number.unique.between(1, 100))
end