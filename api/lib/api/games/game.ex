defmodule Api.Games.Game do
  use Ecto.Schema
  import Ecto.Changeset
  import Ecto.Query

  alias Api.Games.GameType

  @primary_key {:id, :binary_id, autogenerate: true}
  @foreign_key_type :binary_id

  schema "games" do
    field :status, :string
    belongs_to :game_type, GameType

    timestamps(type: :utc_datetime)
  end

  def where_pending(query) do
    where(query, [g], g.status == "pending")
  end

  def include_game_type(query) do
    from q in query,
      join: gt in assoc(q, :game_type),
      preload: [game_type: gt]
  end

  @doc false
  def create_changeset(game, attrs) do
    game
    |> cast(attrs, [:game_type_id])
    |> validate_required([:game_type_id])
    |> put_change(:status, "pending")
  end
end
