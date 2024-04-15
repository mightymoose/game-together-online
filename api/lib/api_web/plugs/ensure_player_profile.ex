defmodule ApiWeb.Plugs.EnsurePlayerProfile do
  alias Api.Users.Profile
  alias ApiWeb.Plugs.PlayerProfile

  def init(_params) do
  end

  def call(conn, _params) do
    conn
    |> PlayerProfile.load_from_session()
    |> maybe_set_profile(conn)
  end

  defp maybe_set_profile(nil, conn) do
    random_username = Profile.random_username()
    default_profile = %Profile{username: random_username}
    PlayerProfile.store_in_session(conn, default_profile)
  end

  defp maybe_set_profile(_, conn), do: conn
end
