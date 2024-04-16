defmodule ApiWeb.Users.ProfileController do
  use ApiWeb, :controller

  alias Api.Users.Profile
  alias ApiWeb.Users.ProfileConnectionStorage
  alias ApiWeb.Plugs.PlayerProfile
  alias Ecto.Changeset

  def current(conn, _params) do
    current_profile = ProfileConnectionStorage.load(conn)
    render(conn, :current, profile: current_profile)
  end

  def update(conn, %{"profile" => profile_params}) do
    changeset = Profile.changeset(%Profile{}, profile_params)

    case Changeset.apply_action(changeset, :update) do
      {:ok, profile} ->
        conn
        |> PlayerProfile.store_in_session(profile)
        |> render(:update, profile: profile)

      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(:error, changeset: changeset)
    end
  end
end
