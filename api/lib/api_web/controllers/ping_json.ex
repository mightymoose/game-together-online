defmodule ApiWeb.PingJSON do
  def ping(_) do
    %{data: "pong"}
  end
end
