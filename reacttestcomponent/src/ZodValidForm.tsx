import './App.css';
import { z, ZodType } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { EventHandler, MouseEventHandler } from 'react';

function ZodValidForm() {
  //remplazado por infer metodo para generar el type
  type FormData = {
    firstName?: string;
    lastName: string;
    email: string;
    age: number;
    password: string;
    confirmPassword: string;
  };
  // const schema = z
  const schema: ZodType<FormData> = z
    .object({
      // firstName: z.string().min(2).max(30),
      firstName: z.string().optional(),
      lastName: z
        .string()
        .min(2, 'Minimo 2 digitos')
        .max(30, 'Maximo 30 digitos'),
      email: z.string().email(),
      age: z.number().min(18).max(70),
      password: z.string().min(5).max(20),
      confirmPassword: z.string().min(5).max(20),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: 'Password do not match',
      path: ['confirmPassword'],
    });

  // type FormData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  // Method to to sende data but after validation
  const submitData = (data: FormData) => {
    // event.preventDefault();

    console.log('It worked', data);
  };

  return (
    <>
      <div className=' mx-[20px] flex justify-center font-roboto text-lg '>
        <form
          className='flex flex-col w-56'
          onSubmit={handleSubmit(submitData)}
        >
          <label>First Name: </label>
          <input type='text' {...register('firstName')} />
          {errors.firstName && (
            <span className='text-red-600 text-sm'>
              {errors.firstName.message}
            </span>
          )}
          <label>Last Name: </label>
          <input type='text' {...register('lastName')} />
          {errors.lastName && (
            <span className='text-red-600 text-sm'>
              {errors.lastName.message}
            </span>
          )}
          <label>Email: </label>
          <input type='email' {...register('email')} />
          {errors.email && (
            <span className='text-red-600 text-sm'>{errors.email.message}</span>
          )}
          <label>Age: </label>
          <input type='number' {...register('age', { valueAsNumber: true })} />
          {errors.age && (
            <span className='text-red-600 text-sm'>{errors.age.message}</span>
          )}
          <label>Password: </label>
          <input type='password' {...register('password')} />
          {errors.password && (
            <span className='text-red-600 text-sm'>
              {errors.password.message}
            </span>
          )}
          <label>Confirm Password: </label>
          <input type='password' {...register('confirmPassword')} />
          {errors.confirmPassword && (
            <span className='text-red-600 text-sm'>
              {errors.confirmPassword.message}
            </span>
          )}

          {/* <button type='submit'>Submit</button> */}
          <button
            type='submit'
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
          >
            Default
          </button>
        </form>
      </div>
    </>
  );
}

export default ZodValidForm;
