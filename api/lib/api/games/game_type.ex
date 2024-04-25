defmodule Api.Games.GameType do
  use Ecto.Schema
  import Ecto.Changeset

  @primary_key {:id, :binary_id, autogenerate: true}

  schema "game_types" do
    field :name, :string
    field :slug, :string
    field :enabled, :boolean

    timestamps(type: :utc_datetime)
  end

  @doc false
  def changeset(game_type, attrs) do
    game_type
    |> cast(attrs, [:name, :slug, :enabled])
    |> validate_required([:name, :slug, :enabled])
    |> unique_constraint(:slug)
  end
end
