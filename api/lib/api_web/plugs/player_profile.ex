defmodule ApiWeb.Plugs.PlayerProfile do
  @session_key :player_profile

  alias Plug.Conn

  def load_from_session(conn) do
    Conn.get_session(conn, @session_key)
  end

  def store_in_session(conn, player_profile) do
    Conn.put_session(conn, @session_key, player_profile)
  end
end
