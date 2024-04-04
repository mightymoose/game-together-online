defmodule ApiWeb.PingController do
  use ApiWeb, :controller

  def ping(conn, _params), do: render(conn, :ping)
end
