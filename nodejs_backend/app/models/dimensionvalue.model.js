module.exports = (sequelize, Sequelize) => {
    const DimensionValue = sequelize.define("DimensionValue", {
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      orderNr: {
        type: Sequelize.INTEGER,
      },
      description: {
        type: Sequelize.TEXT,
      },
      exclusive: {
        type: Sequelize.BOOLEAN,
      },
    }, {
      timestamps: true,
      freezeTableName: true,
    });

    return DimensionValue};