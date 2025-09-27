class HashMap {
    constructor(capacity, loadFactor) {
        this.capacity = capacity;
        this.loadFactor = loadFactor;
        this.size = 0;
        this.buckets = Array.from({ length: capacity }, () => []);
    }

    hash(key) {
        let hashCode = 0;
      
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }
        return hashCode;
    }

    chechBound(index) {
        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }
    }

    set(key, value) {
        if (typeof key !== 'string') {
            throw new Error('Key must be a string');
        }
        const index = this.hash(key) % this.capacity;
        this.chechBound(index);
        const bucket = this.buckets[index];
        for (let item of bucket) {
            if (item[0] === key) {
                item[1] = value;
                return;
            }
        }

        bucket.push([key, value]);
        this.size++;
        if (this.size / this.capacity > this.loadFactor) {
            this.resize();
        }
    }

    get(key) {
        const index = this.hash(key) % this.capacity;
        this.chechBound(index);
        const bucket = this.buckets[index];
        for (let item of bucket) {
            if (item[0] === key) {
                return item[1];
            }
        }
        return null;
    }

    has(key) {
        const index = this.hash(key) % this.capacity;
        this.chechBound(index);
        const bucket = this.buckets[index];
        for (let item of bucket) {
            if (item[0] === key) {
                return true;
            }
        }
        return false;
    }

    remove(key) {
        const index = this.hash(key) % this.capacity;
        this.chechBound(index);
        const bucket = this.buckets[index]; 
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket.splice(i, 1);
                this.size--;
                return true;
            }
        }
        return false;
    }

    length() {
        return this.size;
    }

    clear() {
        this.buckets = Array.from({ length: this.capacity }, () => []);
        this.size = 0;
    }

    keys() {
        const keysArray = [];
        for (let bucket of this.buckets) {
            for (let item of bucket) {
                keysArray.push(item[0]);
            }
        }
        return keysArray;
    }

    values() {
        const valuesArray = [];
        for (let bucket of this.buckets) {
            for (let item of bucket) {
                valuesArray.push(item[1]);
            }
        }
    }

    entries() {
        const entriesArray = [];
        for (let bucket of this.buckets) {
            for (let item of bucket) {
                entriesArray.push([item[0], item[1]]);
            }
        }
        return entriesArray;
    }

    resize() {
        const newCapacity = this.capacity * 2;
        const newBuckets = Array.from({ length: newCapacity }, () => []);
        for (let bucket of this.buckets) {
            for (let item of bucket) {
                const index = this.hash(item[0]) % newCapacity;
                newBuckets[index].push(item);
            }
        }
        this.capacity = newCapacity;
        this.buckets = newBuckets;
    }

}

class HashSet {
    constructor(capacity, loadFactor ) {
        this.capacity = capacity;
        this.loadFactor = loadFactor;
        this.size = 0;
        this.buckets = Array.from({ length: capacity }, () => []);
    }

    hash(key) {
        let hashCode = 0;
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }
        return hashCode;
    }
    chechBound(index) {
        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }
    }
    set(key) {
        if (typeof key !== 'string') {
            throw new Error('Key must be a string');
        }
        const index = this.hash(key) % this.capacity;
        this.chechBound(index);
        const bucket = this.buckets[index];
        for (let item of bucket) {
            if (item === key) {
                return;
            }
        }
        bucket.push(key);
        this.size++; 
        if (this.size / this.capacity > this.loadFactor) {
            this.resize();
        }
    }

    has(key) {
        const index = this.hash(key) % this.capacity;
        this.chechBound(index);
        const bucket = this.buckets[index];
        for (let item of bucket) {
            if (item === key) {
                return true;
            }
        }
        return false;
    }

    remove(key) {
        const index = this.hash(key) % this.capacity;
        this.chechBound(index);
        const bucket = this.buckets[index];
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i] === key) {
                bucket.splice(i, 1);
                this.size--;
                return true;
            }
        }
        return false;
    }

    length() {
        return this.size;
    }

    clear() {
        this.buckets = Array.from({ length: this.capacity }, () => []);
        this.size = 0;
    }

    keys() {
        const keysArray = [];
        for (let bucket of this.buckets) {
            for (let item of bucket) {
                keysArray.push(item);
            }
        }
        return keysArray;
    }

    resize() {
        const newCapacity = this.capacity * 2;
        const newBuckets = Array.from({ length: newCapacity }, () => []);
        for (let bucket of this.buckets) {
            for (let item of bucket) {
                const index = this.hash(item) % newCapacity;
                newBuckets[index].push(item);
            }
        }
        this.capacity = newCapacity;
        this.buckets = newBuckets;
    }

}

export { HashSet, HashMap };