import React, { useContext } from "react";
import Modal from "./Modal";
import { modalContext } from "../App";

const AddToCart = () => {
	const { isShowing, closeModal } = useContext(modalContext);
	return <>{isShowing && <Modal closeModal={closeModal} />}</>;
};

export default AddToCart;
