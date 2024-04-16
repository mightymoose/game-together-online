defmodule ApiWeb.Users.ProfileJSON do
  def current(%{profile: profile}) do
    profile = %{username: profile.username}
    %{data: profile}
  end

  def update(%{profile: profile}) do
    profile = %{username: profile.username}
    %{data: profile}
  end
end
