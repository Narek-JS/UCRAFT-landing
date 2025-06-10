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

export const RadioGroupField = ({ name, label, options }: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[name]?.message as string | undefined;

  return (
    <div>
      <fieldset className="border-0 p-0 m-0">
        <legend className="block font-mediu mb-2">
          {label} <span className="text-red-500">*</span>
        </legend>
        <div className="space-y-2">
          {options.map((opt) => (
            <label key={opt.value} className="flex items-center gap-2">
              <input
                type="radio"
                value={opt.value}
                {...register(name)}
                className={error ? "accent-red-500" : undefined}
              />
              <span>{opt.label}</span>
            </label>
          ))}
        </div>
        {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
      </fieldset>
    </div>
  );
};
