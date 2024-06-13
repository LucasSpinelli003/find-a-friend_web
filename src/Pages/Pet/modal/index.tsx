import { useContext, useState } from "react";
import { Modal } from "antd";
import { Context } from "../../../Context/Provider";
import { createUseStyles } from "react-jss";
import { GetById } from "../../../component/requests/pets/getById";
import petPhoto from "../../../assets/img/dogs/Foto.png";
import petPhoto2 from "../../../assets/img/dogs/karsten-winegeart-5PVXkqt2s9k-unsplash.jpg";
import petPhoto3 from "../../../assets/img/dogs/karsten-winegeart-88lDyjdIDGw-unsplash.jpg";
import petPhoto4 from "../../../assets/img/dogs/karsten-winegeart-BJaqPaH6AGQ-unsplash.jpg";
import petPhoto5 from "../../../assets/img/dogs/karsten-winegeart-WaMMo0it6Vg-unsplash.jpg";
import petPhoto6 from "../../../assets/img/dogs/karsten-winegeart-oU6KZTXhuvk-unsplash.jpg";
import { RatePetEnergy } from "../../../component/rateEnergyPet";
import { PetSpace } from "../../../component/petSpace";
import { PetWeigth } from "../../../component/petWeigth";
import {
  FindByCep,
  SearchByCep,
} from "../../../component/requests/pets/findByCep";
import { SimpleMap } from "../../../component/petMapLocation";
import { FindByOrganizationId } from "../../../component/requests/organization/findById";

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

  const searchByCep: SearchByCep | undefined = FindByCep({ cep: "03081003" });
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const { pet } = GetById({ actualId });
  const organizationId = pet.organizationId;
  const { organization } = FindByOrganizationId({ organizationId });
  console.log(organization);
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
            <PetSpace fv_food={pet.fv_food} />
            <PetWeigth weight={pet.weight} />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "6rem",
          }}
        >
          <div
            style={{
              width: "561px",
              height: "291px",
              borderBottom: "5rem solid #0D3B66",
              borderRadius: "20px",
              alignItems: "center",
            }}
          >
            {/* <iframe
              src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14620.55166052099!2d${searchByCep?.lat}!3d${searchByCep?.lng}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1718052875001!5m2!1spt-BR!2sbr`}
              width="561"
              height="230"
              style={{
                border: 0,
                borderRadius: "30px",
              }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <h1
              style={{
                margin: "0.5rem 0 0 10rem",
                color: "#F4D35E",
                fontSize: "18px",
              }}
            >
              Ver rotas no Google Maps
            </h1> */}
            <div style={{ borderRadius: "20px" }}>
              <SimpleMap
                lat={searchByCep?.lat}
                lng={searchByCep?.lng}
                key={searchByCep?.lat}
              />
            </div>
            <h1
              style={{
                margin: "0.7rem 0 0 11rem",
                color: "#F4D35E",
                fontSize: "18px",
              }}
            >
              Ver rotas no Google Maps
            </h1>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <h1
            style={{
              margin: "5rem",
              border: "0.5px solid #D3E2E5",
              width: "100vw",
            }}
          ></h1>
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
