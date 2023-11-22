import { useState } from 'react';
import * as XLSX from 'xlsx'; // Import xlsx library
import './adminScreen.css';

function AdminScreen() {
  const [wealthiestCustomer, setWealthiestCustomer] = useState('');

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const data = new Uint8Array(event.target.result);
      const workbook = XLSX.read(data, { type: 'array' });

      // Assuming the data is in the first sheet and first column (A1 cell)
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const cellValue = sheet['A1'].v;

      setWealthiestCustomer(cellValue);
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <div className="admin-screen">
      <h2>Admin Dashboard</h2>

      <input type="file" onChange={handleFileUpload} />
      <div>
        <h3>Wealthiest Customer:</h3>
        <p>{wealthiestCustomer}</p>
      </div>
    </div>
  );
}

export default AdminScreen;
