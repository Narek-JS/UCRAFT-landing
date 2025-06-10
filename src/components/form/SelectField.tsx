"use client";

import { useFormContext } from "react-hook-form";

interface Option {
  label: string;
  value: string;
}

interface Props {
  name: string;
  label: string;
  options: Option[];
}

export const SelectField = ({ name, label, options }: Props) => {
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
      <select
        {...register(name)}
        aria-invalid={!!error}
        className={`w-full border rounded px-4 py-2 ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      >
        <option value="">Ընտրել</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
    </div>
  );
};
