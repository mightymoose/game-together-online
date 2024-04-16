defmodule Api.Users do
  alias Api.Users.Profile
  alias Api.Repo

  def create_profile() do
    random_username = Profile.random_username()

    %Profile{}
    |> Profile.changeset(%{username: random_username})
    |> Repo.insert()
  end

  def update_profile(profile, attrs) do
    profile
    |> Profile.changeset(attrs)
    |> Repo.update()
  end

  def get_profile(id) do
    Repo.get(Profile, id)
  end
end
