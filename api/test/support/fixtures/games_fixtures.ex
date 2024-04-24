defmodule Api.GamesFixtures do
  def game_type_attrs(attrs \\ %{}) do
    Enum.into(
      attrs,
      %{
        name: "game type name",
        slug: "game type slug",
        enabled: true
      }
    )
  end
end
