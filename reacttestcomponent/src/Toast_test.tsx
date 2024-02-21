import { SnackbarProvider, enqueueSnackbar } from 'notistack';
import React, { useState } from 'react';
// import toast, { Toaster } from 'react-hot-toast';
import Select from 'react-select';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Import your custom CSS file

function Toast_test() {
  const showToast = () => {
    // toast.success('This is a notification!');
    // toast.error('This is an error message!');
    // toast("Wow so easy !")
    // toast.error("Error Notification ", {
    //   position: toast.POSITION.TOP_LEFT
    // });
    // toast('This is a notification!');
    // enqueueSnackbar('That was easy!')
  
    toast.success("Success Notification !"
    // , {
    //   position: toast.POSITION.BOTTOM_RIGHT
    // }
    );

    toast.error("Error Notification !"
    // , {
    //   position: toast.POSITION.BOTTOM_RIGHT
    // }
    );

    // toast.warn("Warning Notification !", {
    //   position: toast.POSITION.BOTTOM_RIGHT
    // });

    // toast.info("Info Notification !"
    // , {
    //   position: toast.POSITION.BOTTOM_RIGHT
    // });

  };

  
  return (
    <div className='h-screen w-screen'>
      <button onClick={showToast} className='bg-blue-600 rounded-lg p-2 m-5 hover:opacity-80 '>Show Toast</button>
      {/* <Toaster /> */}
      <ToastContainer position='bottom-right' />
      {/* <SnackbarProvider/> */}
      
      {/* <button onClick={closeAfter15}>Close after 15 seconds</button>
      <button onClick={closeAfter7}>Close after 7 seconds</button>
      <ToastContainer autoClose={1000} /> */}
    </div>
  );
}

export default Toast_test;
