defmodule ApiWeb.Users.ProfileController do
  use ApiWeb, :controller

  alias Api.Users
  alias ApiWeb.Users.ProfileConnectionStorage

  def current(conn, _params) do
    current_profile = ProfileConnectionStorage.load(conn)
    render(conn, :current, profile: current_profile)
  end

  def update(conn, %{"profile" => profile_params}) do
    profile = ProfileConnectionStorage.load(conn)

    case Users.update_profile(profile, profile_params) do
      {:ok, profile} ->
        ProfileConnectionStorage.store(conn, profile)
        render(conn, :update, profile: profile)

      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(:error, changeset: changeset)
    end
  end
end
