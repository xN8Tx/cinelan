import { Model, DataTypes } from "sequelize";
import { sequelize } from "@lb";
import { Files } from "./files";

export class Posters extends Model {
  public id!: number;
  public original_source!: string;
  public file_id!: number;
  public size?: string;
}

Posters.init(
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
    original_source: {
      type: DataTypes.STRING(250),
      allowNull: false,
    },
    size: DataTypes.STRING(250),
  },
  {
    sequelize: sequelize,
    tableName: "posters",
    timestamps: false,
  },
);
