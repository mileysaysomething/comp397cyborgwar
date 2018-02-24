var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var shape;
    var bulletList = {};
    var Plane = /** @class */ (function (_super) {
        __extends(Plane, _super);
        // public properties
        // Constructor
        function Plane(assetManager) {
            var _this = _super.call(this, assetManager, "plane") || this;
            // private instance letiables
            _this.frameCount = 0;
            _this.randomlyGenerateBullet = function () {
                //Math.random() returns a number between 0 and 1
                var x = this.x;
                var y = this.y;
                var height = 10;
                var width = 10;
                var id = Math.random();
                var angle = 360;
                var spdX = Math.cos(angle / 180 * Math.PI) * 5;
                var spdY = Math.sin(angle / 180 * Math.PI) * 5;
                Plane.Bullet(id, x, y, spdX, spdY, width, height);
            };
            _this.updateEntityBulletPosition = function (something) {
                something.x += something.spdX * 5;
                something.y += something.spdY * 5;
            };
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        // Initializes letiables and creates new objects
        Plane.prototype.Start = function () {
            this.y = 200;
        };
        Plane.Bullet = function (id, x, y, spdX, spdY, width, height) {
            var asd = {
                x: x,
                spdX: spdX,
                y: y,
                spdY: spdY,
                name: 'E',
                id: id,
                width: width,
                height: height,
                color: 'black',
            };
            bulletList[id] = asd;
        };
        Plane.prototype.updateEntityBullet = function (something) {
            this.drawEntity(something);
            this.updateEntityBulletPosition(something);
        };
        Plane.prototype.drawEntity = function (something) {
            var graphics = new createjs.Graphics().beginFill("red").drawRect(something.x - something.width / 2, something.y - something.height / 2, something.width, something.height);
            shape = new createjs.Shape(graphics);
            objects.Game.stage.addChild(shape);
        };
        // updates the game object every frame
        Plane.prototype.Update = function () {
            this.Move();
            this.CheckBounds();
            this.frameCount = this.frameCount + 1;
            if (this.frameCount % 25 === 0) {
                this.randomlyGenerateBullet();
            } //every 1 sec
            if (this.frameCount % 25) {
                objects.Game.stage.removeChild(shape);
            }
            for (var key in bulletList) {
                this.updateEntityBullet(bulletList[key]);
            }
        };
        // reset the objects location to some value
        Plane.prototype.Reset = function () {
        };
        // move the object to some new location
        //create a class that only moves bullets
        Plane.prototype.Move = function () {
            this.x = objects.Game.stage.mouseX;
            this.y = objects.Game.stage.mouseY;
        };
        // check to see if some boundary has been passed
        Plane.prototype.CheckBounds = function () {
            // right boundary
            if (this.x >= 640 - this.halfWidth) {
                this.x = 640 - this.halfWidth;
            }
            // left boundary
            if (this.x <= this.halfWidth) {
                this.x = this.halfWidth;
            }
        };
        return Plane;
    }(objects.GameObject));
    objects.Plane = Plane;
})(objects || (objects = {}));
//# sourceMappingURL=plane.js.map