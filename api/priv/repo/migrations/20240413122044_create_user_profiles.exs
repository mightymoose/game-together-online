defmodule Api.Repo.Migrations.CreateUserProfiles do
  use Ecto.Migration

  def change do
    create table(:user_profiles, primary_key: false) do
      add :id, :uuid, primary_key: true
      add :username, :string, null: false

      timestamps(type: :utc_datetime)
    end
  end
end
