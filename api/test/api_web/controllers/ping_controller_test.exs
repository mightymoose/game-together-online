defmodule ApiWeb.PingControllerTest do
  use ApiWeb.ConnCase

  test "GET /api/ping", %{conn: conn} do
    conn = get(conn, ~p"/api/ping")
    assert json_response(conn, 200) == %{"data" => "pong"}
  end
end
