'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Conversation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Conversation.init({
    client_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    channel_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    status: DataTypes.STRING,
    waiting_time: DataTypes.STRING,
    processing_time: DataTypes.STRING,
    conversation_duration: DataTypes.STRING,
    created_at: DataTypes.DATE,
    closed_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Conversation',
    tableName: "conversations"
  });
  return Conversation;
};