import { Toaster, toast } from 'react-hot-toast';
function ReactHotToast() {
  const notify = () =>
    toast.error('Por favor, seleccione no soy robot', {
      position: 'bottom-right',
      className: 'text-yellow-600',
    });

  return (
    <>
      <div>
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white rounded '
          onClick={notify}
        >
          Throw Toast
        </button>
      </div>
      <Toaster
        toastOptions={{ style: { background: '#F0F0F0', fontSize: 'bold' } }}
      />
    </>
  );
}

export default ReactHotToast;
