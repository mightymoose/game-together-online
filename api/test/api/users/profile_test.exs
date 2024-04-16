defmodule Api.Users.ProfileTest do
  use Api.DataCase

  alias Api.Users.Profile

  @valid_attrs %{username: "username"}

  test "is invalid without a username" do
    refute Profile.changeset(%Profile{}, Map.put(@valid_attrs, :username, nil)).valid?
  end

  test "is valid with a username" do
    assert Profile.changeset(%Profile{}, @valid_attrs).valid?
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
