'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MessageReaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MessageReaction.init({
    message_id: DataTypes.INTEGER,
    sender_type: DataTypes.STRING,
    sender_id: DataTypes.INTEGER,
    reaction: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'MessageReaction',
    tableName: "message_reactions",
  });
  return MessageReaction;
};