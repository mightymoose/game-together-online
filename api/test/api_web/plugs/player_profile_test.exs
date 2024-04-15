defmodule ApiWeb.Plugs.PlayerProfileTest do
  use ApiWeb.ConnCase

  alias ApiWeb.Plugs.PlayerProfile
  alias Api.UsersFixtures
  alias Plug.Test

  test "stores and loads the player profile", %{conn: conn} do
    profile = UsersFixtures.profile_fixture()

    assert profile ==
             conn
             |> Test.init_test_session(%{})
             |> PlayerProfile.store_in_session(profile)
             |> PlayerProfile.load_from_session()
  end
end
