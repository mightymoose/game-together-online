defmodule ApiWeb.Plugs.SetPlayerProfile do
  alias ApiWeb.Plugs.PlayerProfile
  alias ApiWeb.Users.ProfileConnectionStorage

  @spec init(any()) :: nil
  def init(_params) do
  end

  def call(conn, _params) do
    current_player_profile = PlayerProfile.load_from_session(conn)
    ProfileConnectionStorage.store(conn, current_player_profile)
  end
end
