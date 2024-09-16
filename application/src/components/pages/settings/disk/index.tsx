"use client";
import { useState } from "react";

import { Card } from "../../../wrappers";
import { Title } from "../title";
import { Button } from "@ui";

import { deleteAllData, synchronizeFiles, synchronizeDatabase } from "@at";
import { useServerAction } from "@hk";
import { formatSize } from "@ut";

export default function Disk() {
  const [diskUsage, setDiskUsage] = useState<number>(0);

  const synchronizeFilesHandler = useServerAction(
    synchronizeFiles,
    "Synchronyzing disk files",
  );
  const synchronizeDBHandler = useServerAction(
    synchronizeDatabase,
    "Synchronyzing database",
  );
  const deleteAllDataHandler = useServerAction(
    deleteAllData,
    "Deleting all files",
  );

  return (
    <Card size="sm" height="sm">
      <Title title="Disk" />
      <div className="w-full h-full flex flex-col gap-3">
        <p>Disk usage: {formatSize(diskUsage)} gb.</p>
        <Button
          onClick={() => synchronizeFilesHandler()}
          size="sm"
          color="primary"
        >
          Files synchronization
        </Button>
        <Button
          onClick={() => synchronizeDBHandler()}
          size="sm"
          color="primary"
        >
          Database synchronization
        </Button>
        <Button onClick={() => deleteAllDataHandler()} size="sm" color="danger">
          Deleting all data
        </Button>
      </div>
    </Card>
  );
}
