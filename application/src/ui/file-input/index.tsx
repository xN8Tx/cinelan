import type { ChangeEvent } from "react";
import { CiFileOn } from "react-icons/ci";

type FileInputProps = {
  file: File | null;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  format?: "image/*" | "video/*";
  multiple?: boolean;
};

export const FileInput = ({
  file,
  onChange,
  format = "video/*",
}: FileInputProps) => {
  return (
    <div className="w-full h-[140px] rounded-lg flex flex-col items-center justify-center gap-1 relative py-3 px-4 border border-form-placeh-c1-light dark:border-form-placeh-c1-dark">
      <input
        type="file"
        accept={format}
        onChange={onChange}
        className="absolute z-10 w-full h-full opacity-0"
      />
      {!file && (
        <>
          <CiFileOn className="w-9 h-9 text-form-placeh-c1-light dark:text-form-placeh-c1-dark" />
          <p className="text-base font-medium dark:text-form-placeh-c1-dark text-form-placeh-c1-light">
            Drop or select file
          </p>
        </>
      )}
      {file && (
        <p className="text-base font-medium dark:text-form-placeh-c1-dark text-form-placeh-c1-light">
          {file.name}
        </p>
      )}
    </div>
  );
};
