defmodule Api.Users.ProfileTest do
  use Api.DataCase

  alias Api.Users.Profile
  alias Api.UsersFixtures

  test "is invalid without a username" do
    profile = UsersFixtures.profile_fixture(%{username: nil})
    refute Profile.changeset(%Profile{}, profile).valid?
  end

  test "is valid with a username" do
    profile = UsersFixtures.profile_fixture(%{username: "username"})
    assert Profile.changeset(%Profile{}, profile).valid?
  end

  describe "random_username/0" do
    test "prefixes the username with 'Anonymous'" do
      assert "Anonymous " <> _slug = Profile.random_username()
    end

    test "adds a random slug to the username" do
      "Anonymous " <> slug = Profile.random_username()
      assert String.length(slug) == 5
    end
  end
end
