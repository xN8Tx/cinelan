import { Model, DataTypes } from "sequelize";

import { sequelize } from "@lb";

import { Posters } from "./posters";
import { Types } from "./types";

export class Files extends Model {
  public id!: number;
  public type_id!: number;
  public name!: string;
  public original_source!: string;
  public time!: Date;
  public file_id?: number;
  public slug!: string;
}

Files.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    type_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Types,
        key: "id",
      },
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(250),
      allowNull: false,
    },
    slug: {
      type: DataTypes.STRING(250),
      allowNull: false,
    },
    original_source: {
      type: DataTypes.STRING(250),
      allowNull: false,
    },
    time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    file_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Files, // self-referencing
        key: "id",
      },
      onDelete: "SET NULL",
    },
  },
  {
    sequelize: sequelize,
    tableName: "files",
    timestamps: false,
  },
);
