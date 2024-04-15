defmodule Api.UsersFixtures do
  def profile_fixture(attrs \\ %{}) do
    attrs
    |> Enum.into(%{
      username: "some username"
    })
  end
end
