class Api::PokemonController < ApplicationController

    def index
        @pokemons = Pokemon.all
        render :index
    end

    def show 
        @pokemon = Pokemon.find(params[:id])
        render :show
    end

    def create
    end

    def pokemon_params
    end
    
end
