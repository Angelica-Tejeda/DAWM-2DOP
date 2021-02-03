module.exports = (sequelize, DataTypes) => {
    const Admin = sequelize.define("admins", {
        user: {
        type: DataTypes.STRING
        },
        password: {
        type: DataTypes.STRING
        }
    });

    return Admin; 
};