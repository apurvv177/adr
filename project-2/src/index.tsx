import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BoatUsersView } from "./screens/BoatUsersView";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BoatUsersView />
  </StrictMode>,
);
