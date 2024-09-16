/*
  "bytes=0-1000" => { start: 0, end}
  "bytes=0-" => { start: 0 }
  "bytes=-1000" => { tail: 1000 }
  "bytes=100 1000" => {}
  "bytes 100-1000" => {}
  "1000-2000" => {}
  "bytes" => {}
  "=-" => {}
  "" => {}
*/
type RangeParse = (range: string) => {
  start?: number;
  end?: number;
  tail?: number;
};

export const rangeParse: RangeParse = (range: string) => {
  if (!range || !range.includes("=")) return {};

  const bytes = range.split("=").pop();
  if (!bytes || !range.includes("-")) return {};

  const [start, end] = bytes.split("-").map((n) => parseInt(n));
  if (isNaN(start)) return isNaN(end) ? {} : { end };
  return isNaN(end) ? { start } : { end };
};
