import { useContext, useState } from "react";
import { Modal } from "antd";
import { Context } from "../../../Context/Provider";
import { createUseStyles } from "react-jss";
import { GetById } from "../../../component/methods/pets/getById";
import petPhoto from "../../../assets/img/dogs/Foto.png";
import petPhoto2 from "../../../assets/img/dogs/karsten-winegeart-5PVXkqt2s9k-unsplash.jpg";
import petPhoto3 from "../../../assets/img/dogs/karsten-winegeart-88lDyjdIDGw-unsplash.jpg";
import petPhoto4 from "../../../assets/img/dogs/karsten-winegeart-BJaqPaH6AGQ-unsplash.jpg";
import petPhoto5 from "../../../assets/img/dogs/karsten-winegeart-WaMMo0it6Vg-unsplash.jpg";
import petPhoto6 from "../../../assets/img/dogs/karsten-winegeart-oU6KZTXhuvk-unsplash.jpg";
import { RatePetEnergy } from "../../../component/rateEnergyPet";
import { PetSpace } from "../../../component/petSpace";

const useStyle = createUseStyles({
  petPhotoStyle: {
    width: "100%",
    height: "40vh",
    objectFit: "cover",
    borderTopLeftRadius: "20px",
    borderTopRightRadius: "20px",
  },
  petName: {
    fontFamily: "Nunito",
    fontWeight: "800",
  },
  selectedImage: {
    width: "80px",
    height: "80px",
    borderRadius: "15px",
    cursor: "pointer",
    objectFit: "cover",
    opacity: "0.5",
  },
});

export function PetModal() {
  const { isModalOpen, setIsModalOpen, actualId } = useContext(Context);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const { pet } = GetById({ actualId });
  const { petPhotoStyle, selectedImage } = useStyle();
  const [selectedPicture, setSelectedPicture] = useState(petPhoto);
  const imagePet = [
    petPhoto,
    petPhoto2,
    petPhoto3,
    petPhoto4,
    petPhoto5,
    petPhoto6,
  ];

  return (
    <>
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <img className={petPhotoStyle} src={selectedPicture} alt="" />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "2rem",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "3.5rem",
          }}
        >
          {imagePet.map((image, index) => {
            return (
              <img
                className={selectedImage}
                src={image}
                alt=""
                style={{
                  opacity: image === selectedPicture ? 1 : 0.3,
                  border:
                    image === selectedPicture ? "5px solid #0D3B66" : "none",
                }}
                onClick={() => {
                  setSelectedPicture(image);
                }}
                key={index}
              />
            );
          })}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <h1
            style={{
              margin: "0 0 0 8rem",
              fontFamily: "Nunito",
              fontWeight: "800",
              fontSize: "54px",
              color: "#0D3B66",
            }}
          >
            {pet.name}
          </h1>
          <h2
            style={{
              margin: "0 0 0 8rem",
              fontFamily: "Nunito",
              fontWeight: "400px",
              fontSize: "22px",
              color: "#0D3B66",
            }}
          >
            {pet.description}
          </h2>
          <div
            style={{
              display: "flex",
              gap: "2rem",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <RatePetEnergy energyLevel={3} />
            <PetSpace />
          </div>
        </div>
      </Modal>
      <style>{`
     .ant-modal-content {
      margin: 0 !important;
      padding: 0 !important;
      background:#FDECED !important;
      min-width: 45vw !important;
      min-height: 200vh !important;
      border-radius: 50px!important;
     }
      `}</style>
    </>
  );
}
