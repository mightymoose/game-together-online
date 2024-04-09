defmodule ApiWeb.PingChannel do
  use ApiWeb, :channel

  @impl true
  def join("ping", _payload, socket) do
    {:ok, socket}
  end

  @impl true
  def handle_in("ping", _payload, socket) do
    {:reply, {:ok, "pong"}, socket}
  end
end
