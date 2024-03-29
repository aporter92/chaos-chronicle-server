const { DataTypes } = require("sequelize");
const db = require("../db");

const Video = db.define("video", {
    title: {
        type: DataTypes.STRING
    },
    link: {
        type: DataTypes.STRING
    },
    owner:{
        type: DataTypes.INTEGER
    }
})

module.exports = Video;