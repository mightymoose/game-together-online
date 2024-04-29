defmodule Api.Repo.Migrations.CreateGames do
  use Ecto.Migration

  def change do
    create table(:games, primary_key: false) do
      add :id, :uuid, primary_key: true
      add :status, :string, null: false
      add :game_type_id, references(:game_types, on_delete: :nothing, type: :uuid), null: false

      timestamps(type: :utc_datetime)
    end

    create index(:games, [:game_type_id])
  end
end
