class Api::V1::GreetingsController < ApplicationController
  def index
    @greeting = Greeting.order(Arel.sql('RANDOM()')).first
    render json: @greeting
  end
end
