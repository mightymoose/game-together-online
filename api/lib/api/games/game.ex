defmodule Api.Games.Game do
  use Ecto.Schema
  import Ecto.Changeset

  alias Api.Games.GameType

  @primary_key {:id, :binary_id, autogenerate: true}
  @foreign_key_type :binary_id

  schema "games" do
    field :status, :string
    belongs_to :game_type, GameType

    timestamps(type: :utc_datetime)
  end

  @doc false
  def create_changeset(game, attrs) do
    game
    |> cast(attrs, [:game_type_id])
    |> validate_required([:game_type_id])
    |> put_change(:status, "pending")
  end
end
