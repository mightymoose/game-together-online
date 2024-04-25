defmodule ApiWeb.Games.GameTypesControllerTest do
  use ApiWeb.ConnCase

  test "GET /api/ping", %{conn: conn} do
    conn = get(conn, ~p"/api/games/game_types")
    assert json_response(conn, 200) == %{"data" => [%{"name" => "Spades", "slug" => "spades"}]}
  end
end
