import React, {useState} from 'react';
import Modal from "react-modal";
import Masonry from "react-responsive-masonry"
import { BsPlus, BsDash, BsX } from "react-icons/bs";

const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.75)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000,
    },
    content: {
      border: "none",
      background: "transparent",
      overflow: "hidden",
      borderRadius: "0",
      padding: "0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  };

const AboutGallery = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageScale, setImageScale] = useState(1); // Initial scale factor
    const zoomStep = 0.1;
    const images = [
        "https://i.ibb.co/rskZd1m/food4.png",
        //...
        "https://i.ibb.co/TBxtyj4/Screenshot-82.png",
        "https://i.ibb.co/GJhHRNw/food6.png",
        "https://i.ibb.co/qgSbzpL/food5.png",
        "https://i.ibb.co/fFr8Y5D/food3.png",
        "https://i.ibb.co/r2cQm2j/food2.png",
        
    ]

    const openModal = (image) => {
        setSelectedImage(image);
        setModalIsOpen(true);
      };
    
      const closeModal = () => {
        setSelectedImage(null);
        setModalIsOpen(false);
        setImageScale(0.5); // Reset image scale when closing modal
      };
    
      const handleZoomIn = () => {
        const newScale = imageScale + zoomStep;
        if (newScale <= 0.7) {
          setImageScale(newScale);
        }
      };
    
      const handleZoomOut = () => {
        const newScale = imageScale - zoomStep;
        if (newScale >= 0.3) {
          setImageScale(newScale);
        }
      };

    return (
      <div>
            <div className="my-3">
      <Masonry columnsCount={3} gutter="2px">
        {images.map((image, i) => (
          <img
            key={i}
            src={image}
            style={{ width: "100%", display: "block" }}
            onClick={() => openModal(image)}
          />
        ))}
      </Masonry>
    </div>
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Image Modal"
    >
       <div className="modal-buttons top-right">
          <button className="text-white" onClick={handleZoomIn}>
            <BsPlus className="h-8 w-8"/>
          </button>
          <button className="text-white" onClick={handleZoomOut}>
           <BsDash className="h-8 w-8"/>
          </button>
          <button className="text-white" onClick={closeModal}>
            <BsX className="h-8 w-8"></BsX>
          </button>
        </div>
      {selectedImage && (
        <img
          src={selectedImage}
          alt="Popup"
          style={{
            width: `${imageScale * 100}%`,
            maxWidth: "100%",
            maxHeight: "100%",
          }}
        />
      )}
    </Modal>
      </div>
    );
};

export default AboutGallery;