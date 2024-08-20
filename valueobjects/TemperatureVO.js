//jsdoc es el nombre de la documentacion
//Es cun comentario estandar 

/**
 * Temperature Representation.
 * @constructor
 * @param {number} value - The temperature value.
 * @param {string} unit - The temperature unit. Valid values: CELSIUS or FAHRENHEIT.
 */
exports.TemperatureVO = function (value, unit) {
    this.value = value;
    this.unit = unit;
};