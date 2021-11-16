import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import ContactInfo from "./ContactInfo";

const Map = () => {
	return (
		<div className="relative z-0">
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
				<Marker position={[51.505, -0.09]}>
					<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
				</Marker>
			</MapContainer>
			<ContactInfo />
		</div>
	);
};

export default Map;
