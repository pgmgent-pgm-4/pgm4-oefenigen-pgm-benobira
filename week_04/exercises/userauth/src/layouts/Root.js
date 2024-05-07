import React from "react";
import Navigation from "../components/Navigation";
import { Outlet } from "react-router-dom";

export default function Root() {
	return (
		<>
			<Navigation />
			<main>
                {/* Hier komt de content van de pagina */}
				<Outlet />
			</main>
		</>
	);
}