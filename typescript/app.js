var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Spacecraft = (function () {
    function Spacecraft(propulsor) {
        this.propulsor = propulsor;
    }
    Spacecraft.prototype.jumpIntoHyperspace = function () {
        console.log("Entering hyperspace with " + this.propulsor);
    };
    return Spacecraft;
})();
var ship = new Spacecraft('hiperdrive');
ship.jumpIntoHyperspace();
var MillenniumFalcon = (function (_super) {
    __extends(MillenniumFalcon, _super);
    function MillenniumFalcon() {
        _super.call(this, 'hyperdrive');
        this.cargoContainers = 4;
    }
    MillenniumFalcon.prototype.jumpIntoHyperspace = function () {
        if (Math.random() >= 0.5) {
            _super.prototype.jumpIntoHyperspace.call(this);
        }
        else {
            console.log('Failed to jump into hyperspace');
        }
    };
    return MillenniumFalcon;
})(Spacecraft);
var falcon = new MillenniumFalcon();
falcon.jumpIntoHyperspace();
var goodForTheJob = function (ship) { return ship.cargoContainers > 2; };
console.log("Is falcon good for the job? " + (goodForTheJob(falcon) ? 'yes' : 'no'));
