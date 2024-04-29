defmodule Api.GamesTest do
  use Api.DataCase

  alias Api.Games

  describe "create_game" do
    test "returns the game with valid attributes" do
      [game_type] = Games.list_game_types()
      assert {:ok, game} = Games.create_game(%{game_type_id: game_type.id})

      assert game.game_type_id == game_type.id
      assert game.status == "pending"
    end

    test "returns an error changeset with invalid attributes" do
      assert {:error, _changeset} = Games.create_game(%{})
    end
  end

  describe "list_game_types\0" do
    test "returns all game types" do
      game_types = Games.list_game_types()
      assert length(game_types) == 1
    end
  end
end
