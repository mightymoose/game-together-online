defmodule ApiWeb.Users.ProfileController do
  use ApiWeb, :controller

  action_fallback ApiWeb.FallbackController

  alias Api.Users
  alias ApiWeb.Users.ProfileConnectionStorage

  def current(conn, _params) do
    current_profile = ProfileConnectionStorage.load(conn)
    render(conn, :current, profile: current_profile)
  end

  def update(conn, %{"profile" => profile_params}) do
    profile = ProfileConnectionStorage.load(conn)

    with {:ok, profile} <- Users.update_profile(profile, profile_params) do
      ProfileConnectionStorage.store(conn, profile)
      render(conn, :update, profile: profile)
    end
  end
end
