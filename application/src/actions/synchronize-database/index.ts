"use server";
import { sequelize } from "@lb";
import type { ServerActionType } from "@tp";

export const synchronizeDatabase: ServerActionType = async () => {
  try {
    await sequelize.sync();

    return {
      success: "Database successully synchronize",
    };
  } catch (error) {
    console.error(error);
    return {
      error:
        "Server error. Can not delete synchronize database. Watch more information in Settings -> Logs",
    };
  }
};
