"use client";

import { useFormContext } from "react-hook-form";

interface Props {
  name: string;
  label: string;
  accept?: string;
}

export const FileUploadField = ({
  name,
  label,
  accept = ".pdf,.doc,.docx,.txt",
}: Props) => {
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
      <input
        type="file"
        accept={accept}
        {...register(name)}
        className={
          error
            ? "block w-full border border-red-500 rounded px-4 py-2"
            : "block w-full border border-gray-300 rounded px-4 py-2"
        }
      />
      {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
    </div>
  );
};
