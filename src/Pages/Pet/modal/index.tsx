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
import companyLogo from "../../../assets/img/Group 94.png";
import wpp from "../../../assets/img/Vector (2).png";
import {
  FindByCep,
  SearchByCep,
} from "../../../component/requests/pets/findByCep";
import { SimpleMap } from "../../../component/petMapLocation";
import { FindByOrganizationId } from "../../../component/requests/organization/findById";
import { ScreenLine } from "../../../component/ScreenLine";
import { Info } from "phosphor-react";
import { FindByRequirementId } from "../../../component/requests/requirements/findById";

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
  console.log(pet.id);
  const { requirements } = FindByRequirementId({ petId: pet.id });
  console.log(requirements);

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
            <SimpleMap
              lat={searchByCep?.lat}
              lng={searchByCep?.lng}
              key={searchByCep?.lat}
            />
          </div>
        </div>
        <ScreenLine />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "1rem",
            }}
          >
            <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
              <img src={companyLogo} alt="" />
              <div>
                <h1
                  style={{
                    fontFamily: "Nunito",
                    fontSize: "30px",
                    color: "#0D3B66",
                  }}
                >
                  {organization.name}
                </h1>
                <p
                  style={{
                    fontFamily: "Nunito",
                    fontSize: "18px",
                    color: "#0D3B66",
                  }}
                >
                  {organization.localization},{organization.city},{" "}
                  {searchByCep?.state?.[0]}
                  {searchByCep?.state?.[1]}
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                gap: "1rem",
                alignItems: "center",
                padding: "0.5rem",
                width: "70%",
                height: "60px",
                background: "#e6d7d777",
                borderRadius: "20px",
              }}
            >
              <img src={wpp} alt="" />
              <h1
                style={{
                  fontFamily: "Nunito",
                  fontSize: "20px",
                  color: "#0D3B66",
                }}
              >
                {organization.phone}
              </h1>
            </div>
          </div>
        </div>
        <ScreenLine />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              fontFamily: "Nunito",
              fontSize: "30px",
              color: "#0D3B66",
              margin: "0 23.5rem 0 0",
            }}
          >
            Requisitos para adoção
          </h1>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            {requirements?.map((rule) => {
              return (
                <h1
                  style={{
                    padding: "0.5rem 4rem",
                    background: "#d42019111",
                    border: "1px solid #F15156",
                    borderRadius: "20px",
                    fontFamily: "Nunito",
                    fontSize: "20px",
                    color: "#d42a30",
                    alignItems: "center",
                  }}
                  key={rule.id}
                >
                  <Info /> {rule.name}
                </h1>
              );
            })}
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
