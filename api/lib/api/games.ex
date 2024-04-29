defmodule Api.Games do
  alias Api.Games.GameType
  alias Api.Games.Game
  alias Api.Repo

  def create_game(attrs) do
    %Game{}
    |> Game.create_changeset(attrs)
    |> Repo.insert()
  end

  def list_game_types() do
    Repo.all(GameType)
  end
end
