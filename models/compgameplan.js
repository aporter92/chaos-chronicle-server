const { DataTypes } = require("sequelize");
const db = require("../db");

const CompetitionGamePlan= db.define("cplan", {

    date: {
        type: DataTypes.STRING,
        allowNull: false
    },
    overridingGoal: {
        type: DataTypes.STRING
    },
    standUpGoals: {
        type: DataTypes.STRING
    },
    whereDoYouLand: {
        type: DataTypes.STRING
    },
    whatNext: {
        type: DataTypes.STRING
    },
    issues: {
        type: DataTypes.STRING
    },
    owner: {
        type: DataTypes.INTEGER
    }
});

module.exports = CompetitionGamePlan;