defmodule ApiWeb.Games.GameTypesController do
  use ApiWeb, :controller

  alias Api.Games

  def index(conn, _params) do
    game_types = Games.list_game_types()
    render(conn, :index, game_types: game_types)
  end
end
