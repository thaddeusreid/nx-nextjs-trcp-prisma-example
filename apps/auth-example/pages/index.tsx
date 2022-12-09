import React, { FormEvent } from "react";
import { trpc } from "../utils/trpc";

interface FormData {
  elements: Array<{ value: string }>
}

export function Form() {
  const mutation = trpc.user.useMutation();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    const { elements } = event.target as typeof event.target & FormData;
    event.preventDefault();
    mutation.mutate({
      email: elements[0].value,
      password: elements[1].value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="grid">
      <label htmlFor="email" className="mb-2">
        Email
      </label>
      <input type="email" name="email" className="max-w-full rounded-lg mb-4" />

      <label htmlFor="Password" className="mb-2">
        Password
      </label>
      <input type="password" name="Password" className="max-w-full rounded-lg mb-8" />

      <input type="submit" value="Login" className="bg-red rounded-lg text-white py-3 hover:cursor-pointer" />
    </form>
  )
}

export function Index() {
  return (
    <div className="max-w-md mx-auto grid items-center justify-center min-h-screen">
      <div className="grid text-center px-10 py-8 bg-white rounded-lg">
        <Form />
      </div>
    </div>
  );
}

export default Index;
