// src/components/ResetPassword.tsx
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type FormValues = {
  email: string;
};

const ResetPassword: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    // Adicione a lógica para enviar o email de recuperação de senha
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <h2 className="text-2xl font-bold text-center">Recuoerar Senha</h2>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="email"
              type="email"
              {...register('email', { required: 'Email is required' })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>

          <div className="flex items-center justify-center">
            <button type="submit" className="py-2 px-4 bg-btn-primary-color text-white font-semibold rounded-md shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
