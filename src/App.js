import "./App.css";
import Chart from "./components/chart";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Table from "./components/table";
import Main from "./components/topbar";

function App() {
	return (
		<div>
			<Header />
			<div className="container-fluid">
				<div className="row">
					<Sidebar />
					<main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
						<Main />
						<Chart />
						<h2>Section title</h2>
						<Table />
					</main>
				</div>
			</div>
		</div>
	);
}

export default App;
