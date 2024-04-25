defmodule Api.Repo.Migrations.CreateGameTypes do
  use Ecto.Migration

  def change do
    create table(:game_types, primary_key: false) do
      add :id, :uuid, primary_key: true
      add :name, :string, null: false
      add :slug, :string, null: false
      add :enabled, :boolean, null: false

      timestamps(type: :utc_datetime)
    end

    create unique_index(:game_types, [:slug])
  end
end
