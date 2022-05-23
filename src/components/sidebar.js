import React from "react";

export default function Sidebar() {
	return (
		<nav
			id="sidebarMenu"
			className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
		>
			<div className="position-sticky pt-3">
				<ul className="nav flex-column">
					<li className="nav-item">
						<a className="nav-link active" aria-current="page" href="#0">
							<i className="fa-solid fa-house"></i> Dashboard
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#1">
							<i className="fa-solid fa-file"></i> Orders
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#2">
							<i className="fa-solid fa-cart-shopping"></i> Products
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#3">
							<i className="fa-solid fa-user-group"></i> Customers
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#4">
							<i className="fa-solid fa-chart-column"></i> Reports
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#5">
							<i className="fa-solid fa-layer-group"></i> Integrations
						</a>
					</li>
				</ul>

				<h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
					<span>Saved reports</span>
					<a className="link-secondary" href="#6" aria-label="Add a new report">
						<i className="fa-solid fa-circle-plus"></i>
					</a>
				</h6>
				<ul className="nav flex-column mb-2">
					<li className="nav-item">
						<a className="nav-link" href="#7">
							<i className="fa-solid fa-file-lines"></i> Current month
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#8">
							<i className="fa-solid fa-file-lines"></i> Last quarter
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#9">
							<i className="fa-solid fa-file-lines"></i> Social engagement
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#10">
							<i className="fa-solid fa-file-lines"></i> Year-end sale
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}
