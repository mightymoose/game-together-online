defmodule ApiWeb.Plugs.PlayerProfile do
  @session_key :player_profile_id

  alias Plug.Conn
  alias Api.Users

  def load_from_session(conn) do
    conn
    |> Conn.get_session(@session_key)
    |> load_profile()
  end

  def store_in_session(conn, player_profile) do
    Conn.put_session(conn, @session_key, player_profile.id)
  end

  defp load_profile(nil), do: nil
  defp load_profile(id), do: Users.get_profile(id)
end
