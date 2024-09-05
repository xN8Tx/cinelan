import Image from "next/image";

export const Video = () => {
  return (
    <div className="w-full aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
      <Image
        width={300}
        height={300}
        className="w-full h-full object-cover"
        src="/poster/test.jpg"
        alt="test"
      />
    </div>
  );
};
