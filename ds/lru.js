class Cache {
    constructor(capacity) {
        this.map = new Map();
        this.capacity = capacity;
    }

    put(key, value) {
        if (this.map.has(key)) {
            this.map.delete(key);
        } else if (this.map.size >= this.capacity) {
            this.map.delete(this.map.keys().next().value);
        }
        this.map.set(key, value);
    }

    get(key) {
        return this.map.get(key);
    }
}

const cache = new Cache(2);

cache.put(1, 2);
cache.put(2, 4);
cache.put(1, 2);
cache.put(3, 3);
console.log(cache.get(3));
