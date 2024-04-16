defmodule ApiWeb.Users.ProfileConnectionStorageTest do
  use ApiWeb.ConnCase

  # TODO: Convert creating profiles to a fixture
  alias ApiWeb.Users.ProfileConnectionStorage
  alias Api.UsersFixtures

  test "loads and stores the profile", %{conn: conn} do
    profile = UsersFixtures.profile_fixture()

    assert profile ==
             conn
             |> Plug.Test.init_test_session(%{})
             |> ProfileConnectionStorage.store(profile)
             |> ProfileConnectionStorage.load()
  end
end
