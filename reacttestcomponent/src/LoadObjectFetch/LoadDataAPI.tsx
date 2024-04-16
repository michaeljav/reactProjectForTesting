import { useEffect, useState } from 'react';
import { dataOject } from './Data';
import axios from 'axios';
import { jwtString } from './token';

export const LoadDataApi: React.FC = () => {
  const [text, setText] = useState('');
  const [textError, setTextError] = useState('');

  const data = dataOject;
  const jwt = jwtString;
  const endpoint = 'http://localhost:3000/service-tracking';
  useEffect(() => {
    let count = 0;
    const postData = async (data: any, urlEndpoint: string, jwt: string) => {
      // const postData = (data: any, urlEndpoint: string, jwt: string) => {
      try {
        const response = await axios.post(`${urlEndpoint}`, data, {
          // const response = axios.post(`${urlEndpoint}`, data, {
          headers: {
            Authorization: `Bearer ${jwt}`,
            'Content-Type': 'application/json',
          },
        });
        count = count + 1;
        console.log(`RESPONSE: ${count}`, response?.data, response?.data?.code);
        // return response?.data.code;
        // return response;
        if (response?.data?.code) {
          setText(
            (pr) =>
              (pr =
                pr +
                `\n ${count}.==========||||======== \n` +
                JSON.stringify(response?.data?.code))
          );
        } else {
          setTextError(
            (pr) =>
              (pr =
                pr +
                '\n==========||||======== \n' +
                JSON.stringify(response?.data))
          );
        }
      } catch (error) {
        console.log('error: ', error);
        // return error;
        setTextError(JSON.stringify(error));
      }
    };

    const pro = [];

    for (let index = 0; index < data.length; index++) {
      // if (index < 1) continue;

      const element = data[index];
      postData(element, endpoint, jwt);
      // pro.push(postData(element, endpoint, jwt));
    }

    // Promise.all(pro).then((values) => {
    // Promise.allSettled(pro)
    //   .then((values) => {
    //     console.log('PROMISE: ', values);
    //   })
    //   .catch((err) => {
    //     console.log('err: ', err);
    //   });

    // data.forEach((dataOj) => {
    //   postData(dataOj, endpoint, jwt);
    // });
  }, [data, endpoint, jwt]);

  return (
    <>
      <p>Error</p>
      <hr className='border-blue-600 border-b-8' />
      <textarea value={textError} rows={50} className='bg-slate-300 w-full' />
      <p>Success</p>
      <hr className='border-blue-600 border-b-8' />
      <textarea cols={100} rows={5} value={text} className='bg-slate-300' />
    </>
  );
};
