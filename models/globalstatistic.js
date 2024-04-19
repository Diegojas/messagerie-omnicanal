'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GlobalStatistic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  GlobalStatistic.init({
    total_conversations: DataTypes.INTEGER,
    average_waiting_time: DataTypes.STRING,
    average_processing_time: DataTypes.STRING,
    average_conversation_duration: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'GlobalStatistic',
    tableName: "global_statistics"
  });
  return GlobalStatistic;
};