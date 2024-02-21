import { type ReactElement, CSSProperties, useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

const override: CSSProperties = {
  position: 'fixed',
  top: '45%',
  left: '50%',

  // transform: 'translate(-50%,-50%s)',
  // display: 'flex',
  // justifyContent: 'flex-end',
  // alignItems: 'center',
  // display: 'block',
  // margin: '0 auto',
  // borderColor: 'red',
};

interface Props {
  loading?: boolean;
  setLoading?: (value: boolean) => void;
}
const ScreenSpinnerLoading = ({
  loading = false,
  setLoading = () => undefined,
}: Props): ReactElement => {
  // const [loading, setLoading] = useState(true);
  // const [color, setColor] = useState('#ffffff');
  const [color, setColor] = useState('#003876');
  return (
    <div className={`sweet-loading bg-gray-400  ${loading && 'overlay'} `}>
      <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
      <input
        value={color}
        onChange={(input) => setColor(input.target.value)}
        placeholder='Color of the loader'
      />

      <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={100}
        aria-label='Loading Spinner'
        data-testid='loader'
      />
    </div>
  );
};

export default ScreenSpinnerLoading;
