defmodule ApiWeb.Games.GameTypesJSON do
  def index(%{game_types: game_types}) do
    %{data: Enum.map(game_types, &game_type/1)}
  end

  defp game_type(%Api.Games.GameType{} = game_type) do
    %{name: game_type.name, slug: game_type.slug}
  end
end
