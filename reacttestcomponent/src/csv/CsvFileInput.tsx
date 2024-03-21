import React, { ChangeEvent, useState } from 'react';
import Papa from 'papaparse';

export const CsvFileInput: React.FC = () => {
  const [csvData, setCsvData] = useState<any[]>([]);

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    console.log('Michael ', e, e.target, e.target.files);
    const file = e.target.files?.[0];
    if (file) {
      Papa.parse(file, {
        header: true,
        complete: (result) => {
          console.log('Termino ', result, result?.data);
          setCsvData(result.data);
        },
        error: (error) => {
          console.error('Error parsing CSV:', error);
        },
      });
    }
  };

  interface DataItem {
    id: number;
    name: string;
    age: number;
    email: string;
  }

  const data: DataItem[] = [
    { id: 1, name: 'John Doe', age: 30, email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', age: 25, email: 'jane.smith@example.com' },
  ];

  const exportToCsv = (data: DataItem[], fileName: string) => {
    const csv = Papa.unparse(data);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });

    const link = document.createElement('a');
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', `${fileName}.csv`);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } else {
      alert('Your browser does not support downloading files.');
    }
  };

  const handleExport = () => {
    exportToCsv(data, 'exported_data');
  };

  return (
    <div>
      <button
        onClick={handleExport}
        className='bg-primary text-white p-1 border-black hover:opacity-70'
      >
        Export to CSV
      </button>
      <br />
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
