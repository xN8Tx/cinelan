import { Model, DataTypes } from "sequelize";

import { sequelize } from "@lb";
import { Files } from "./files";

export class FileInfo extends Model {
  public id!: number;
  public file_id!: number;
  public duration!: number;
  public size!: number;
  public format!: string;
  public original_name!: string;
}

FileInfo.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    file_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Files,
        key: "id",
      },
      allowNull: false,
      onDelete: "SET NULL",
    },
    duration: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    size: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    format: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    original_name: {
      type: DataTypes.STRING(250),
      allowNull: false,
    },
  },
  {
    sequelize: sequelize,
    tableName: "file_info",
    timestamps: false,
  },
);
