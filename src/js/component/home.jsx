import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid m-0">
			<div className="container-fluid sticky-top"><Navbar /></div>
			<div className="container-fluid"><Jumbotron /></div>
			<div className="container-fluid">
				<div className="row">
					<div className="col-12 col-md-6 col-lg-3 mb-3">
						<Card />
					</div>
					<div className="col-12 col-md-6 col-lg-3 mb-3">
						<Card />
					</div>
					<div className="col-12 col-md-6 col-lg-3 mb-3">
						<Card />
					</div>
					<div className="col-12 col-md-6 col-lg-3 mb-3">
						<Card />
					</div>
				</div>
				<div className="container-fluid"><Footer /></div>
			</div>
		</div>

	);
};

export default Home;
