var config;
(function (config) {
    var Key = /** @class */ (function () {
        function Key() {
        }
        // arrow keys
        Key.LEFT_ARROW = 37;
        Key.RIGHT_ARROW = 39;
        Key.UP_ARROW = 38;
        Key.DOWN_ARROW = 40;
        // WASD keys
        Key.W = 87;
        Key.A = 65;
        Key.S = 83;
        Key.D = 68;
        // space bar
        Key.SPACE = 32;
        return Key;
    }());
    config.Key = Key;
})(config || (config = {}));
//# sourceMappingURL=keys.js.map