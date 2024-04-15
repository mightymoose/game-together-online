defmodule ApiWeb.Users.ProfileConnectionStorage do
  alias Plug.Conn

  @key :player_profile

  def store(connection, player_profile) do
    Conn.assign(connection, @key, player_profile)
  end

  def load(connection) do
    connection.assigns[@key]
  end
end
