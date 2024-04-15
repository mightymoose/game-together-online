defmodule Api.Users.Profile do
  use Ecto.Schema
  import Ecto.Changeset

  @primary_key {:id, :binary_id, autogenerate: true}

  schema "user_profiles" do
    field :username, :string

    timestamps(type: :utc_datetime)
  end

  @doc false
  def changeset(profile, attrs) do
    profile
    |> cast(attrs, [:username])
    |> validate_required([:username])
  end

  def random_username() do
    alphabet = ~c"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    slug = for _ <- 1..5, do: Enum.random(alphabet)
    "Anonymous #{slug}"
  end
end
