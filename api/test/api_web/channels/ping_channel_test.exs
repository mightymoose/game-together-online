defmodule ApiWeb.PingChannelTest do
  use ApiWeb.ChannelCase

  setup do
    {:ok, _, socket} =
      ApiWeb.UserSocket
      |> socket("user_id", %{})
      |> subscribe_and_join(ApiWeb.PingChannel, "ping")

    %{socket: socket}
  end

  test "ping replies with status ok", %{socket: socket} do
    ref = push(socket, "ping", %{})
    assert_reply ref, :ok, "pong"
  end
end
