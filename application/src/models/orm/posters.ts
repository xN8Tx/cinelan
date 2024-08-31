import { Model, DataTypes } from "sequelize";
import { sequelize } from "@lb";

export class Posters extends Model {
  public id!: number;
  public original_source!: string;
  public size?: string;
}

Posters.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    original_source: {
      type: DataTypes.STRING(250),
      allowNull: false,
    },
    size: DataTypes.STRING(250),
  },
  {
    sequelize,
    tableName: "posters",
    timestamps: false,
  },
);
