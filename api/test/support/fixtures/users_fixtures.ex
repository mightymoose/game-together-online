defmodule Api.UsersFixtures do
  alias Api.Users

  def profile_fixture() do
    {:ok, profile} = Users.create_profile()

    profile
  end
end
