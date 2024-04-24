defmodule Api.Repo.Migrations.InsertSpadesGameType do
  use Ecto.Migration

  def up do
    execute """
    INSERT INTO game_types
            (id,
             NAME,
             slug,
             enabled,
             inserted_at,
             updated_at)
    VALUES  (gen_random_uuid(),
             'Spades',
             'spades',
             true,
             Now(),
             Now())
    """
  end

  def down do
    execute """
    DELETE FROM game_types
    WHERE  slug = 'spades'
    """
  end

  def insert_spades_game_type_sql do
  end

  def delete_spades_game_type_sql do
  end
end
