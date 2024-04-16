defmodule ApiWeb.Plugs.EnsurePlayerProfile do
  alias Api.Users
  alias ApiWeb.Plugs.PlayerProfile

  def init(_params) do
  end

  def call(conn, _params) do
    conn
    |> PlayerProfile.load_from_session()
    |> maybe_set_profile(conn)
  end

  defp maybe_set_profile(nil, conn) do
    {:ok, profile} = Users.create_profile()
    PlayerProfile.store_in_session(conn, profile)
  end

  defp maybe_set_profile(_, conn), do: conn
end
