import config from "devextreme/core/config";
import { licenseKey } from "./devextreme-license";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import themes from "devextreme/ui/themes";

// Configure the DevExpress license key
config({ licenseKey });

// Set the color theme
const theme: "fluent.saas.light" | "fluent.saas.dark" = localStorage.getItem("theme") == "dark" ? "fluent.saas.dark" : "fluent.saas.light"
themes.current(theme);

// Render the application
ReactDOM.createRoot(document.getElementById("root")!).render(
    <App />
);
