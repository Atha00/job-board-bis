const Job = ({ title, className, contractType, country, city }) => {
  // destucturing des props

  return (
    <div className={`card ${className}`}>
      <h2>{title !== "" ? title : "Cette offre n'a pas de titre"}</h2>
      <p>
        {contractType} - {country} - {city}
      </p>
    </div>
  );
};

export default Job;

// question (condition) ? sioui : sinon
