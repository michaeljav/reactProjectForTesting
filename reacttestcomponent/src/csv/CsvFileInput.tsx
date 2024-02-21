import React, { ChangeEvent, useState } from 'react';
import Papa from 'papaparse';

export const CsvFileInput: React.FC = () => {
  const [csvData, setCsvData] = useState<any[]>([]);

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      Papa.parse(file, {
        header: true,
        complete: (result) => {
          setCsvData(result.data);
        },
        error: (error) => {
          console.error('Error parsing CSV:', error);
        },
      });
    }
  };

  return (
    <div>
      <input type='file' accept='.csv' onChange={handleFileUpload} />
      <table>
        <thead>
          <tr>
            {csvData.length > 0 &&
              Object.keys(csvData[0]).map((key) => <th key={key}>{key}</th>)}
          </tr>
        </thead>
        <tbody>
          {csvData.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((value, index) => (
                <td key={index}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
