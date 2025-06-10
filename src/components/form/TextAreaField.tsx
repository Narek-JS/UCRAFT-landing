"use client";

import { useFormContext } from "react-hook-form";

interface Props {
  name: string;
  label: string;
  placeholder?: string;
}

export const TextAreaField = ({ name, label, placeholder }: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[name]?.message as string | undefined;

  return (
    <div>
      <label className="block font-medium mb-2">
        {label} <span className="text-red-500">*</span>
      </label>
      <textarea
        {...register(name)}
        aria-invalid={!!error}
        className={`w-full border rounded px-4 py-2 ${
          error ? "border-red-500" : "border-gray-300"
        }`}
        placeholder={placeholder}
        rows={4}
      />
      {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
    </div>
  );
};
