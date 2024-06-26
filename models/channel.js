'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Channel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Channel.init({
    name: DataTypes.STRING,
    slug: DataTypes.STRING,
    total_conversations_per_channel: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Channel',
    tableName: "channels",
    timestamps: true,
  });
  return Channel;
};