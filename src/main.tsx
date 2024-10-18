import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { persistor, store } from "./store/store.ts";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")!).render(
	<BrowserRouter>
		<Provider store={store}>
			<PersistGate
				loading={null}
				persistor={persistor}
			>
				<StrictMode>
					<App />
				</StrictMode>
			</PersistGate>
		</Provider>
	</BrowserRouter>
);
