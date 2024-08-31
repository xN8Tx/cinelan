import { Model, DataTypes } from "sequelize";
import { sequelize } from "@lb";

export class Types extends Model {
  public id!: number;
  public name!: string;
}

Types.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    sequelize: sequelize,
    tableName: "types",
    timestamps: false,
  },
);
