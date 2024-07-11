import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [showName, setShowName] = useState("");
  const [tableData, setTableData] = useState([]);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleButton = () => {
    setShowName(`Welcome, ${name}`);
    setTableData([...tableData, { id: tableData.length + 1, value: name }]);
    setName("");
  };

  const handleDelete = (id) => {
    setTableData(tableData.filter((item) => item.id!== id));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={handleChange}
      />
      <button
        id="mybutton"
        className="bg-blue-500 border border-1 w-20"
        onClick={handleButton}
      >
        Submit
      </button>
      <p>{showName}</p>
      <table className="border-collapse border border-gray-500">
        <tr className="bg-gray-200">
          <th>Sl</th>
          <th>Value</th>
          <th>Action</th>
        </tr>
        {tableData.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.value}</td>
            <td>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}