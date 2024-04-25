defmodule Api.Games do
  alias Api.Games.GameType
  alias Api.Repo

  def list_game_types() do
    Repo.all(GameType)
  end
end
