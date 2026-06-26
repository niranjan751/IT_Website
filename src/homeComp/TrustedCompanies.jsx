const companies = [
  "HYUNDAI",
  "TOYOTA",
  "ATHER",
  "PHILIPS",
  "BYJU'S",
  "ITV",
  "MARRIOTT",
  "ZOOMCAR",
  "ESSILOR",
  "ROGERS",
  "SHIJI",
  "PUMA",
  "DAIKIN",
  "MEESHO",
  "BOSCH",
  "YOKOHAMA",
  "LOREAL",
  "IFFCO",
];

function TrustedCompanies() {
  return (
    <section className="companies">

      {companies.map((company, index) => (
        <div key={index} className="company-card">
          <h2>{company}</h2>
        </div>
      ))}

    </section>
  );
}

export default TrustedCompanies;