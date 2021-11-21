import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import ContactInfo from "./ContactInfo";

const Map = () => {
	return (
		<div className="relative lg:w-2/3 z-0">
			<MapContainer
				center={[-8.061286938328518, -34.90281506875374]}
				zoom={13}
				scrollWheelZoom={true}
				className="relative z-0"
			>
				<TileLayer
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker position={[51.505, -0.09]}></Marker>
			</MapContainer>
			<ContactInfo />
		</div>
	);
};

export default Map;
