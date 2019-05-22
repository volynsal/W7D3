json.pokemon do 
        # json.set! @pokemon.id do 
           json.partial! 'api/pokemon/poke', poke: @pokemon
        # end
end


json.items do
    @pokemon.items.each do |item|
        json.set! item.id do
            json.extract! item, :id, :name, :pokemon_id, :price, :happiness, :image_url
        end
    end
end