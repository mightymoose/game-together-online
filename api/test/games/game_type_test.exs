defmodule Api.Games.GameTypeTest do
  use Api.DataCase

  alias Api.GamesFixtures
  alias Api.Repo
  alias Api.Games.GameType

  test "is valid with valid data" do
    attrs = GamesFixtures.game_type_attrs()
    assert GameType.changeset(%GameType{}, attrs).valid?
  end

  test "is invalid without a name" do
    attrs = GamesFixtures.game_type_attrs(%{name: nil})
    refute GameType.changeset(%GameType{}, attrs).valid?
  end

  test "is invalid without a slug" do
    attrs = GamesFixtures.game_type_attrs(%{slug: nil})
    refute GameType.changeset(%GameType{}, attrs).valid?
  end

  test "is invalid without the enabled flag" do
    attrs = GamesFixtures.game_type_attrs(%{enabled: nil})
    refute GameType.changeset(%GameType{}, attrs).valid?
  end

  test "is invalid with a duplicate slug" do
    attrs = GamesFixtures.game_type_attrs()

    {:ok, _game_type} =
      %GameType{}
      |> GameType.changeset(attrs)
      |> Repo.insert()

    assert {:error, _changeset} =
             %GameType{}
             |> GameType.changeset(attrs)
             |> Repo.insert()
  end
end
