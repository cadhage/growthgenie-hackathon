// // import React from 'react';
// import './clientScreen.css';
// function ClientScreen() {
//   // Example data for top funds (placeholders)
//   const topMutualFunds = [
//     { name: 'Fund 1', returns: '10%' },
//     { name: 'Fund 2', returns: '8%' },
//     // Add more fund objects as needed
//   ];

//   const topFixedDeposits = [
//     { name: 'FD 1', returns: '7%' },
//     { name: 'FD 2', returns: '6.5%' },
//     // Add more FD objects as needed
//   ];

//   const topStocks = [
//     { name: 'Stock 1', returns: '15%' },
//     { name: 'Stock 2', returns: '12%' },
//     // Add more stock objects as needed
//   ];

//   return (
//     <div className="client-screen">
//       <h2>Client Dashboard</h2>
      
//       <section>
//         <h3>Top Performing Mutual Funds</h3>
//         <ul>
//           {topMutualFunds.map((fund, index) => (
//             <li key={index}>{fund.name} - Returns: {fund.returns}</li>
//           ))}
//         </ul>
//       </section>

//       <section>
//         <h3>Top Performing Fixed Deposits</h3>
//         <ul>
//           {topFixedDeposits.map((fd, index) => (
//             <li key={index}>{fd.name} - Returns: {fd.returns}</li>
//           ))}
//         </ul>
//       </section>

//       <section>
//         <h3>Top Performing Stocks</h3>
//         <ul>
//           {topStocks.map((stock, index) => (
//             <li key={index}>{stock.name} - Returns: {stock.returns}</li>
//           ))}
//         </ul>
//       </section>
//     </div>
//   );
// }

// export default ClientScreen;

import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx'; // Import xlsx library

function ClientScreen() {
  const [topMF, setTopMF] = useState([]);
  const [topFD, setTopFD] = useState([]);
  const [topStocks, setTopStocks] = useState([]);

  useEffect(() => {
    // Function to read data from Excel file
    const fetchDataFromExcel = async () => {
      try {
        const response = await fetch('path_to_your_excel_file.xlsx');
        const data = await response.arrayBuffer();
        const workbook = XLSX.read(data, { type: 'array' });

        // Assuming data in the first sheet and appropriate column names
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const excelData = XLSX.utils.sheet_to_json(sheet);

        // Filter and set top MF, FD, and stocks based on criteria
        const topMFData = excelData.filter((row) => row.Type === 'MF');
        const topFDData = excelData.filter((row) => row.Type === 'FD');
        const topStocksData = excelData.filter((row) => row.Type === 'Stocks');

        setTopMF(topMFData.slice(0, 10)); // Display top 10 MF
        setTopFD(topFDData.slice(0, 10)); // Display top 10 FD
        setTopStocks(topStocksData.slice(0, 10)); // Display top 10 stocks
      } catch (error) {
        console.error('Error reading Excel file:', error);
      }
    };

    fetchDataFromExcel();
  }, []);

  return (
    <div className="client-screen">
      <h2>Client Dashboard</h2>

      <section>
        <h3>Top Performing Mutual Funds</h3>
        <ul>
          {topMF.map((fund, index) => (
            <li key={index}>{fund.Name} - Returns: {fund.Returns}</li>
          ))}
        </ul>
      </section>

      <section>
        <h3>Top Performing Fixed Deposits</h3>
        <ul>
          {topFD.map((fd, index) => (
            <li key={index}>{fd.Name} - Returns: {fd.Returns}</li>
          ))}
        </ul>
      </section>

      <section>
        <h3>Top Performing Stocks</h3>
        <ul>
          {topStocks.map((stock, index) => (
            <li key={index}>{stock.Name} - Returns: {stock.Returns}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default ClientScreen;
