import satData from "./satData";
import styles from "./styling.css";



const Table = ({ sat }) => {

  return (
    <table id="Orbits">
      <thead>
      <link rel = "stylesheet" type = "text/css" href = "styles.css" />
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Launch Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {sat.map((data, id) => {
          return (  
          <tr key={id}>
            <td>{data.name}</td>
            <td>{data.type}</td>
            <td>{data.launchDate}</td>
            <td>{data.operational ? "Active": "Inactive"}</td>
          </tr>
          )
        })};
      
       </tbody>
    </table>
  );
};

export default Table;
