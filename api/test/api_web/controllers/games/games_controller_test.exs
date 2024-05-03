defmodule ApiWeb.Games.GamesControllerTest do
  use ApiWeb.ConnCase

  describe "GET /api/games/lobby" do
    test "returns a list of pending games", %{conn: conn} do
      conn = get(conn, "/api/games/game_types")
      assert [game_type] = json_response(conn, 200)["data"]
      conn = post(conn, "/api/games", %{game: %{game_type_id: game_type["id"]}})
      conn = get(conn, "/api/games/lobby")
      assert %{"data" => [%{"status" => "pending"}]} = json_response(conn, 200)
    end
  end

  describe "POST /api/games" do
    test "returns an error when the data is invalid", %{conn: conn} do
      conn = post(conn, "/api/games", %{game: %{}})
      assert %{"game_type_id" => ["can't be blank"]} = json_response(conn, 422)["errors"]
    end

    test "creates a game", %{conn: conn} do
      conn = get(conn, "/api/games/game_types")
      assert [game_type] = json_response(conn, 200)["data"]
      game_type_id = game_type["id"]

      conn = post(conn, "/api/games", %{game: %{game_type_id: game_type_id}})
      assert %{"status" => "pending"} = json_response(conn, 200)["data"]
    end
  end
end
