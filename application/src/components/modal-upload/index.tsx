import { ModalWrapper } from "../modal-wrapper";

export const ModalUpload = () => {
  return (
    <ModalWrapper>
      <div className="max-w-[520px] w-full p-6 bg-card-bg-c1-light dark:bg-card-bg-c1-dark flex flex-col gap-7">
        <h3 className="text-2xl font-bold dark:text-heading-c1-dark text-heading-c1-light">
          Upload
        </h3>
      </div>
    </ModalWrapper>
  );
};
