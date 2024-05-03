defmodule ApiWeb.Games.GamesController do
  use ApiWeb, :controller

  action_fallback ApiWeb.FallbackController

  alias Api.Games

  def lobby(conn, _params) do
    games = Games.list_pending_games()
    render(conn, :lobby, games: games)
  end

  def create(conn, %{"game" => game_params}) do
    with {:ok, game} <- Games.create_game(game_params) do
      render(conn, :create, game: game)
    end
  end
end
