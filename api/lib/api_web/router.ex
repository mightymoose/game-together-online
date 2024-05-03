defmodule ApiWeb.Router do
  use ApiWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_live_flash
    plug :put_root_layout, html: {ApiWeb.Layouts, :root}
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
    plug :fetch_session
    plug ApiWeb.Plugs.EnsurePlayerProfile
    plug ApiWeb.Plugs.SetPlayerProfile
  end

  scope "/", ApiWeb do
    pipe_through :browser

    get "/", PageController, :home
  end

  scope "/api", ApiWeb do
    pipe_through :api

    get "/games/lobby", Games.GamesController, :lobby
    resources "/games", Games.GamesController, only: [:create]

    scope "/games", Games do
      get "/game_types", GameTypesController, :index
    end

    scope "/users", Users do
      get "/profiles/current", ProfileController, :current
      put "/profiles/current", ProfileController, :update
    end

    get "/ping", PingController, :ping
  end

  # Enable LiveDashboard and Swoosh mailbox preview in development
  if Application.compile_env(:api, :dev_routes) do
    # If you want to use the LiveDashboard in production, you should put
    # it behind authentication and allow only admins to access it.
    # If your application does not have an admins-only section yet,
    # you can use Plug.BasicAuth to set up some basic authentication
    # as long as you are also using SSL (which you should anyway).
    import Phoenix.LiveDashboard.Router

    scope "/dev" do
      pipe_through :browser

      live_dashboard "/dashboard", metrics: ApiWeb.Telemetry
      forward "/mailbox", Plug.Swoosh.MailboxPreview
    end
  end
end
