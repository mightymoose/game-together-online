defmodule ApiWeb.Plugs.SetPlayerProfileTest do
  use ApiWeb.ConnCase

  alias ApiWeb.Plugs.SetPlayerProfile
  alias ApiWeb.Plugs.PlayerProfile
  alias ApiWeb.Users.ProfileConnectionStorage
  alias Api.UsersFixtures

  describe "call/2" do
    test "stores the current player profile in the connection assigns", %{conn: conn} do
      profile = UsersFixtures.profile_fixture()

      conn =
        conn
        |> Plug.Test.init_test_session(%{})
        |> PlayerProfile.store_in_session(profile)
        |> SetPlayerProfile.call(profile)

      assert profile == ProfileConnectionStorage.load(conn)
    end
  end
end
