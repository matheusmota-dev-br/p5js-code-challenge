class Cell {
    constructor(i, j) {
        this.i = i;
        this.j = j;
        this.walls = [true, true, true, true];
        this.visited = false;
    }

    checkNeighbors = function () {
        var neighbors = [];

        var top = grid[index(this.i, this.j - 1)];
        var right = grid[index(this.i + 1, this.j)];
        var left = grid[index(this.i - 1, this.j)];
        var bottom = grid[index(this.i, this.j + 1)];

        if (top && !top.visited) {
            neighbors.push(top);
        }
        if (right && !right.visited) {
            neighbors.push(right);
        }
        if (left && !left.visited) {
            neighbors.push(left);
        }
        if (bottom && !bottom.visited) {
            neighbors.push(bottom);
        }

        if (neighbors.length > 0) {
            var r = floor(random(0, neighbors.length));
            return neighbors[r];
        } else {
            return undefined;
        }
    };

    hightlight = function () {
        var x = this.i * w;
        var y = this.j * w;
        noStroke();
        fill(0, 0, 255, 100);
        rect(x, y, w, w);
    };

    show = function () {
        var x = this.i * w;
        var y = this.j * w;
        stroke(255);
        if (this.walls[0]) {
            line(x, y, x + w, y);
        }
        if (this.walls[1]) {
            line(x + w, y, x + w, y + w);
        }
        if (this.walls[2]) {
            line(x + w, y + w, x, y + w);
        }
        if (this.walls[3]) {
            line(x, y + w, x, y);
        }

        if (this.visited) {
            noStroke();
            fill(255, 0, 255, 100);
            rect(x, y, w, w);
        }

    };
}
