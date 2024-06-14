interface test {
  lat: string | undefined;
  lng: string | undefined;
}

export function SimpleMap({ lat, lng }: test) {
  return (
    <>
      <iframe
        src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14620.55166052099!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1718052875001!5m2!1spt-BR!2sbr`}
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
      </h1>
    </>
  );
}
