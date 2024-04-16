import './App.css';
import FlexTest from './FlexTest';
import GridTest from './GridTest';
import { ReactQuery } from './reactQuery/ReactQuery';
import ScreenSpinnerLoading from './ScreenSpinnerLoading';
import ScreenSpinnerLoadingTesting from './ScreenSpinnerLoadingTesting';
import SortTest from './SortTest';
import Toast_test from './Toast_test';
import { TuringTest } from './TuringTest';
import CustomSelect from './selecttest';
import SortWithoutBuiltFunnc from './sortWithoutBuiltFunnc';
import TestFont from './testFont';
import { ReactQueryProblem } from './reactQueryProblem/ReactQueryProblem';
import { DatePickerComp } from './components_Ant/DatePickerHide';
import { TableComp } from './components_Ant/Table';
import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { getCharacters } from './reactQueryProblem/serviceAxios';
import { useRef } from 'react';
import { NestedListApp } from './NestedListApp';
import { CustomBarChart } from './recharts/barcharRecharts';

// import ZodValidForm from './zodValidForm';
import { ConvertHoursToCalendarUnit } from './ConvertHoursToCalendarUnit';
import { CsvTest } from './csv/CsvTest';
import { Filter } from './javascript_vanilla/Filter';
import ZodValidForm from './ZodValidForm';
import { Map } from './javascript_vanilla/Map';
import { v4 as uuidv4 } from 'uuid';
import { Reduce } from './javascript_vanilla/Reduce';
import { RepeatedVoting } from './churchVoting/calculvoting';
import { LoadDataApi } from './LoadObjectFetch/LoadDataAPI';
function App() {
  // const ar1: number[] = [1, 2, 3];
  // const ar1: number[] = [];
  const count = useRef(0);
  count.current++;

  // const query: UseQueryResult = useQuery({
  //   queryKey: ['characters'],
  //   queryFn: () => getCharacters({ page: 1, Name: '' }),
  // });
  // // console.log('PADRE query.isLoading', count, query.isLoading);

  const exercises = [
    <Reduce />,
    // <Map />,
    // <Filter />,
    // <CsvTest />,
    // <ZodValidForm />,
  ];
  return (
    <>
      <LoadDataApi />
      {/* <RepeatedVoting /> */}
      {/* <CustomSelect /> */}
      {/* Cargar archivo csv */}
      {/* {exercises.map((exercise) => exercise)} */}

      {/* Convert minuto a hora */}
      {/* <ConvertHoursToCalendarUnit /> */}
      {/* <CustomBarChart /> */}
      {/* {ar1 ? ar1.map((v) => <p>{v}</p>) : <p>No valores</p>} */}
      {/* {ar1 && ar1.length > 0 ? ar1.map((v) => <p>{v}</p>) : <p>No valores</p>} */}
      {/* <TableComp />
      <DatePickerComp /> */}
      {/* <DatePickerComp /> */}
      {/* <NestedListApp/> */}
      {/* <ReactQueryProblem query={query} /> */}
      {/* <ReactQuery/> */}
      {/* < Toast_test/> */}
      {/* <GridTest /> */}
      {/* <FlexTest/> */}
      {/* <TestFont/> */}
      {/* <ScreenSpinnerLoadingTesting /> */}
      {/* <SortWithoutBuiltFunnc />
      <SortTest /> */}

      {/* <TuringTest /> */}
      {/* <ReactHotToast /> */}
      {/* <GridTest /> */}
      {/* <ZodValidForm /> */}
    </>
  );
}

export default App;
