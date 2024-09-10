import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useContext } from "react";

import { BigModalContext, SmallModalContext } from "@ct";

import { Wrapper } from "../wrapper";
import { Title } from "../title";

export const Delete = () => {
  const router = useRouter();

  const { file, setBigModalType } = useContext(BigModalContext);
  const { setSmallModalMessage, setSmallModalType, setLoadingProgress } =
    useContext(SmallModalContext);

  const deleteHandler = async () => {
    setBigModalType(null);
    setLoadingProgress(100);
    setSmallModalMessage("Files are deleting");
    setSmallModalType("loading");

    const res = await fetch(`/api/delete/${file?.id}`, { method: "DELETE" });
    if (!res.ok) {
      console.log(await res.text());

      setSmallModalMessage("Can not delete files. Watch more info in console");
      setSmallModalType("error");
      return;
    }

    setSmallModalType("success");
    setSmallModalMessage("Successfuly delete files");
    router.push("/");
  };

  return (
    <Wrapper>
      <div className="max-w-[520px] w-full p-6 bg-card-bg-c1-light dark:bg-card-bg-c1-dark flex flex-col gap-7 rounded-xl">
        <Title title="Delete" />
        <p className="text-base text-heading-c1-light dark:text-heading-c1-dark">
          Are you sure you want to delete {file?.name}?
          {file?.type.name === "folder" ||
            (file?.type.name === "serial" &&
              "All nested files will be deleted.")}
        </p>
        <Button className="w-full" color="danger" onClick={deleteHandler}>
          Yes, I{"'"}m sure
        </Button>
      </div>
    </Wrapper>
  );
};
