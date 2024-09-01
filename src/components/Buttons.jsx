import satData from "./satData";

const Buttons = ({ filterByType, setSat, displaySats }) => {
      return (
        <div className="flex-container">
          <head>
            <link rel = "stylesheet" type = "text/css" href = "styles.css" />
            </head>
          {displaySats.map((sat, id) => {
            return (
              <button onClick={() => filterByType(sat)} key={id}>
                {sat} Orbit
              </button>
            );
          })}
          <button onClick={() => setSat(satData)}>All Orbits</button>
        </div>
      );
    };
  
export default Buttons;
