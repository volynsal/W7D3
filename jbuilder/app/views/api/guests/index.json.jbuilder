json.array!(@guests)  do |guest|
    json.partial! 'api/guests/guest', guest: guest
end




#  @guests.each do |guest|
#   json.set! guest.id do
#     json.extract! guest, :name, :age, :favorite_color
#   end
# end