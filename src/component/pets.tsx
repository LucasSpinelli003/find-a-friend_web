import { createUseStyles } from "react-jss";

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
    border: "4px solid gray",
  },
  sidebar: {
    background: "gray",
    borderRadius: "30px",
    overflow: "hidden",
    width: "18rem",
    height: "14rem",

    strong: {
      margin: "1rem 0 0 0",
      color: "var(--gray-100)",
      lineHeight: "1.6",
    },

    footer: {
      borderTop: "1px solid var(--gray-600)",
      marginTop: "1.5rem",
      padding: "1.5rem 2rem 2rem",

      a: {
        width: "100%",
        backgroundColor: "transparent",
        color: "var(--green-500)",
        border: "1px solid var(--green-500)",
        borderRadius: "8px",
        height: "50px",
        padding: "0 1.5rem",
        fontWeight: "bold",
        display: "block",
        textDecoration: "none",

        alignItems: "center",
        justifyContent: "center",

        gap: "0.47rem",

        transition: "color 0.1s, background-color 0.1s",

        "&:hover": {
          background: "var(--green-500)",
          color: "var(--white)",
        },
      },
    },
  },
  cover: {
    width: "100%",
    height: "65%",
    objectFit: "cover",
    borderRadius: "30px",
    border: "7px solid gray",
  },
  profile: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    marginTop: "-2rem",
    strong: {
      marginTop: "1rem",
      color: "var(--gray-100)",
      lineHeight: "1.6",
    },
    span: {
      fontSize: "0.875rem",
      color: "var(--gray-400)",
      lineHeight: "1.6",
    },
  },
});

export function Pets({ name, favoriteFood }: Pet) {
  const { avatar, profile, cover, sidebar } = useStyles();
  return (
    <aside className={sidebar}>
      <img
        className={cover}
        src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=50"
        alt=""
      />
      <div className={profile}>
        <img
          className={avatar}
          src="https://github.com/gpelegrine.png"
          alt=""
        />
        <strong>{name}</strong>
        <span>{favoriteFood}</span>
      </div>
    </aside>
  );
}
