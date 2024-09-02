import { Model, DataTypes } from "sequelize";

import { sequelize } from "@lb";
import { Files } from "./files";

export class FileDescription extends Model {
  public id!: number;
  public file_id!: number;
  public original_name!: string;
  public description?: string;
  public date?: Date;
  public status?: boolean;
  public duration?: number;
  public box_office?: string;
  public budget?: string;
}

FileDescription.init(
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
    original_name: {
      type: DataTypes.STRING(250),
      allowNull: false,
    },
    description: DataTypes.TEXT,
    date: DataTypes.DATE,
    status: DataTypes.BOOLEAN,
    duration: DataTypes.BIGINT,
    box_office: DataTypes.STRING,
    budget: DataTypes.STRING,
  },
  {
    sequelize: sequelize,
    tableName: "file_description",
    timestamps: false,
  },
);
