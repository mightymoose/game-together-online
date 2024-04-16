defmodule ApiWeb.Plugs.EnsurePlayerProfileTest do
  use ApiWeb.ConnCase

  alias ApiWeb.Plugs.EnsurePlayerProfile
  alias ApiWeb.Plugs.PlayerProfile
  alias Api.UsersFixtures

  describe "call/2" do
    test "does not modify the current profile if it is found in the session", %{conn: conn} do
      profile = UsersFixtures.profile_fixture()

      assert profile ==
               conn
               |> Plug.Test.init_test_session(%{})
               |> PlayerProfile.store_in_session(profile)
               |> EnsurePlayerProfile.call(conn)
               |> PlayerProfile.load_from_session()
    end

    test "creates a new player profile if none is found in the session", %{conn: conn} do
      assert %{username: "Anonymous " <> _slug} =
               conn
               |> Plug.Test.init_test_session(%{})
               |> EnsurePlayerProfile.call(conn)
               |> PlayerProfile.load_from_session()
    end
  end
end
