defmodule Api.GamesTest do
  use Api.DataCase

  alias Api.Games

  describe "list_game_types\0" do
    test "returns all game types" do
      game_types = Games.list_game_types()
      assert length(game_types) == 1
    end
  end
end
