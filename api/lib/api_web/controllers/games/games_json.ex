defmodule ApiWeb.Games.GamesJSON do
  def lobby(%{games: games}) do
    %{data: Enum.map(games, &%{id: &1.id, status: &1.status, game_type: game_type(&1)})}
  end

  def create(%{game: game}) do
    %{data: %{id: game.id, status: game.status}}
  end

  defp game_type(%{game_type: game_type}) do
    %{id: game_type.id, name: game_type.name, slug: game_type.slug}
  end
end
