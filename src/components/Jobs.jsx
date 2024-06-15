import Job from "./Job";
import data from "../assets/jobs.json";

// console.log(data); // pour vérifier que l'import a fonctionné

const Jobs = () => {
  // const tab = [
  //   { name: "Alexis", module: "React" },
  //   { name: "Gwen", module: "JavaScript" },
  //   { name: "Lucas", module: "Intégration" },
  // ];

  // dans le return du composant :

  // {tab.map((element, index) => {
  //   // console.log(element); // {name: 'Alexis', module: 'React'}
  //   // console.log(index); // affiche 0, puis 1, puis 2... et on va s'en servir comme clef !
  //   return (
  //     <div key={index}>
  //       <p>{element.name}</p> {/* affichera Alexis */}
  //       <p>{element.module}</p> {/* affichera React */}
  //     </div>
  //   );
  // })}

  return (
    <main className="container">
      {data.map((element) => {
        console.log(element); // {title: 'CRM & Data Quality Analyst', contractType: 'CDI', country: 'USA', city: 'New-York', className: 'yellow', …}
        return (
          <Job
            title={element.title}
            contractType={element.contractType}
            country={element.country}
            city={element.city}
            className={element.className}
          />
        );
      })}
    </main>
  );
};

export default Jobs;
