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
  headers: {
    h1: {
      margin: "4rem 0 0 8rem",
      fontFamily: "Nunito",
      fontWeight: "800",
      fontSize: "54px",
      color: "#0D3B66",
    },
    h2: {
      margin: "4rem 0 0 8rem",
      fontFamily: "Nunito",
      fontWeight: "400px",
      fontSize: "22px",
      color: "#0D3B66",
    },
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
  const { petPhotoStyle, headers } = useStyle();
  const [selectedPicture, setSelectedPicture] = useState(petPhoto);

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
          }}
        >
          <img
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "15px",
              objectFit: "cover",
              cursor: "pointer",
            }}
            src={petPhoto}
            alt=""
            onClick={() => {
              setSelectedPicture(petPhoto);
            }}
          />
          <img
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "15px",
              cursor: "pointer",
              objectFit: "cover",
            }}
            src={petPhoto2}
            alt=""
            onClick={() => {
              setSelectedPicture(petPhoto2);
            }}
          />
          <img
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "15px",
              objectFit: "cover",
              cursor: "pointer",
            }}
            src={petPhoto3}
            alt=""
            onClick={() => {
              setSelectedPicture(petPhoto3);
            }}
          />
          <img
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "15px",
              objectFit: "cover",
              cursor: "pointer",
            }}
            src={petPhoto4}
            alt=""
            onClick={() => {
              setSelectedPicture(petPhoto4);
            }}
          />
          <img
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "15px",
              objectFit: "cover",
              cursor: "pointer",
            }}
            src={petPhoto5}
            alt=""
            onClick={() => {
              setSelectedPicture(petPhoto5);
            }}
          />
          <img
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "15px",
              objectFit: "cover",
              cursor: "pointer",
            }}
            src={petPhoto6}
            alt=""
            onClick={() => {
              setSelectedPicture(petPhoto6);
            }}
          />
        </div>
        <div className={headers}>
          <h1
            style={{
              margin: "4rem 0 0 8rem",
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
              margin: "4rem 0 0 8rem",
              fontFamily: "Nunito",
              fontWeight: "400px",
              fontSize: "22px",
              color: "#0D3B66",
            }}
          >
            {pet.description}
          </h2>
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
     .ant-modal-body{
      div{
        margin: 2rem 0 !important;
      }
  
     }
     
      `}</style>
    </>
  );
}
