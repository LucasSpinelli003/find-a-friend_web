import { useContext } from "react";
import { Modal } from "antd";
import { Context } from "../../../Context/Provider";
import { createUseStyles } from "react-jss";
import { GetById } from "../../../component/methods/pets/getById";
import petPhoto from "../../../assets/img/Foto.png";

const useStyle = createUseStyles({
  petPhotoStyle: {
    width: "100%",
    height: "30vh",
    objectFit: "cover",
    borderTopLeftRadius: "20px",
    borderTopRightRadius: "20px",
  },
  petName: {
    fontFamily: "Nunito",
    fontWeight: "800",
  },
});

export function PetModal() {
  const { isModalOpen, setIsModalOpen, actualId } = useContext(Context);
  console.log(actualId);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const { pet } = GetById({ actualId });
  const { petPhotoStyle } = useStyle();

  return (
    <>
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <img className={petPhotoStyle} src={petPhoto} alt="" />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "2rem",
          }}
        >
          <img
            style={{
              width: "100vw",
              height: "60px",
              borderRadius: "15px",
              objectFit: "cover",
              cursor: "pointer",
            }}
            src={petPhoto}
            alt=""
          />
          <img
            style={{ width: "100vw", height: "60px" }}
            src={petPhoto}
            alt=""
          />
          <img
            style={{ width: "100vw", height: "60px" }}
            src={petPhoto}
            alt=""
          />
          <img
            style={{ width: "100vw", height: "60px" }}
            src={petPhoto}
            alt=""
          />
          <img
            style={{ width: "100vw", height: "60px" }}
            src={petPhoto}
            alt=""
          />
        </div>
        <h1>{pet.name}</h1>
      </Modal>
      <style>{`
     .ant-modal-content {
      margin: 0 !important;
      padding: 0 !important;
      background:#FDECED !important;
      width: 40vw !important;
      height: 80vh !important;
      border-radius: 50px!important;
     }
     .ant-modal-body{
      img{
        width: 100% !important;
        heigth: 10% !important;
      }
     }
     
      `}</style>
    </>
  );
}
