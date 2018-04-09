enum Rating {one, two, three, four, five};

class Drink {
    name: string;
    rating: Rating;
    comment: string;
    constructor(public n, public r, public c){
        this.name = n;
        this.rating = r;
        this.comment = c;
    }
}

interface Entry {
    name: string;
    rating: Rating;
    comment: string;
}

function display_entry(entry: Entry){
    return "Drink:\n" + entry.name + "\nRating:" + entry.rating
}

var entry1 = new Drink("Gin", 5, "Delicious")

document.body.innerHTML = display_entry(entry1)