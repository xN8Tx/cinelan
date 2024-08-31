import { Model, DataTypes } from "sequelize";

export class Users extends Model {
  public id!: number;
  public name!: string;
}

Users.init(
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
    sequelize,
    tableName: "users",
    timestamps: false,
  },
);
