defmodule ApiWeb.Games.GameTypesControllerTest do
  use ApiWeb.ConnCase

  test "GET /api/ping", %{conn: conn} do
    conn = get(conn, ~p"/api/games/game_types")

    assert %{"data" => [%{"name" => "Spades", "slug" => "spades"}]} =
             json_response(conn, 200)
  end
end
