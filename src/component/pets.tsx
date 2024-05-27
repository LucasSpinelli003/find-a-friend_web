import { createUseStyles } from "react-jss";
import logo from "../assets/img/Group 18.png";
import littleDog from "../assets/img/charlesdeluvio-Mv9hjnEUHR4-unsplash.jpg";

interface Pet {
  id?: string;
  name: string;
  description?: string;
  weight?: number;
  favoriteFood: string;
  birth?: Date;
}

const useStyles = createUseStyles({
  avatar: {
    boxSizing: "initial",
    width: "3rem",
    height: "3rem",
    borderRadius: "8px",
    border: "4px solid #0D3B66",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    background: "red",
  },
  sidebar: {
    background: "#0D3B66",
    borderRadius: "30px",
    overflow: "hidden",
    width: "18rem",
    height: "14rem",
  },
  cover: {
    width: "100%",
    height: "65%",
    objectFit: "cover",
    borderRadius: "30px",
    border: "7px solid #0D3B66",
  },
  profile: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    marginTop: "-2rem",

    span: {
      fontSize: "0.875rem",
      color: "#fff",
      lineHeight: "1.6",
    },
    strong: {
      marginTop: "1rem",
      color: "#fff",
      lineHeight: "1.6",
    },
  },
});

export function Pets({ name, favoriteFood }: Pet) {
  const { avatar, profile, cover, sidebar } = useStyles();
  return (
    <aside className={sidebar}>
      <img className={cover} src={littleDog} alt="" />
      <div className={profile}>
        <div className={avatar}>
          <img src={logo} alt="" />
        </div>

        <strong>{name}</strong>
        <span>{favoriteFood}</span>
      </div>
    </aside>
  );
}
