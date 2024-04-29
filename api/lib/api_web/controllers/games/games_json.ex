defmodule ApiWeb.Games.GamesJSON do
  def create(%{game: game}) do
    %{data: %{id: game.id, status: game.status}}
  end
end
