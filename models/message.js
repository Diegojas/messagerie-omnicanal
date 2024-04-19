'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Message.init({
    conversation_id: DataTypes.INTEGER,
    sender_type: DataTypes.STRING,
    sender_id: DataTypes.INTEGER,
    content: DataTypes.TEXT,
    parent_message_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Message',
    tableName: "messages",
    timestamps: true
  });
  return Message;
};