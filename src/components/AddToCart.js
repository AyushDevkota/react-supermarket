import React, { useContext } from "react";
import Modal from "./Modal";
import { modalContext } from "../App";
import SuccessOverlay from "./SuccessOverlay";

const AddToCart = () => {
	const { isShowing, closeModal, success } = useContext(modalContext);
	return (
		<>
			{isShowing && <Modal closeModal={closeModal} />}
			{success && <SuccessOverlay msg="Added to cart successfully" />}
		</>
	);
};

export default AddToCart;
