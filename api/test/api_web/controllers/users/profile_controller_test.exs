defmodule ApiWeb.Users.ProfileControllerTest do
  use ApiWeb.ConnCase

  describe "GET /api/users/profiles/current" do
    test "returns a new profile when there's not one already", %{conn: conn} do
      conn = get(conn, "/api/users/profiles/current")
      assert %{"username" => username} = json_response(conn, 200)["data"]
      assert "Anonymous " <> slug = username
      assert String.length(slug) == 5
    end

    test "returns the stored profile when there is one", %{conn: conn} do
      conn = get(conn, "/api/users/profiles/current")
      assert %{"username" => username} = json_response(conn, 200)["data"]

      conn = get(conn, "/api/users/profiles/current")
      assert %{"username" => ^username} = json_response(conn, 200)["data"]
    end
  end

  describe "PUT /api/users/profiles/current" do
    test "returns an error when the data is invalid", %{conn: conn} do
      conn = get(conn, "/api/users/profiles/current")
      assert %{"username" => _username} = json_response(conn, 200)["data"]

      conn = put(conn, "/api/users/profiles/current", %{profile: %{username: ""}})
      assert %{"username" => ["can't be blank"]} = json_response(conn, 422)["errors"]
    end

    test "updates the users' profile", %{conn: conn} do
      conn = get(conn, "/api/users/profiles/current")
      assert %{"username" => _username} = json_response(conn, 200)["data"]

      conn = put(conn, "/api/users/profiles/current", %{profile: %{username: "new username"}})
      assert %{"username" => "new username"} = json_response(conn, 200)["data"]
    end
  end
end
