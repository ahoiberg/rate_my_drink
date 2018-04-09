var Rating;
(function (Rating) {
    Rating[Rating["one"] = 0] = "one";
    Rating[Rating["two"] = 1] = "two";
    Rating[Rating["three"] = 2] = "three";
    Rating[Rating["four"] = 3] = "four";
    Rating[Rating["five"] = 4] = "five";
})(Rating || (Rating = {}));
;
var Drink = /** @class */ (function () {
    function Drink(n, r, c) {
        this.n = n;
        this.r = r;
        this.c = c;
        this.name = n;
        this.rating = r;
        this.comment = c;
    }
    return Drink;
}());
function display_entry(entry) {
    return "Drink:\n" + entry.name + "\nRating:" + entry.rating;
}
var entry1 = new Drink("Gin", 5, "Delicious");
document.body.innerHTML = display_entry(entry1);
