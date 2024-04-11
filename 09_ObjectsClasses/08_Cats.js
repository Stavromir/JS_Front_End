function getCats(array) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    let cats = [];


    for (const cat of array) {
        const [name, age] = cat.split(" ");
        cats.push(new Cat(name, age));
    }

    cats.forEach(cat => cat.meow());
}


getCats(['Mellow 2', 'Tom 5']);
getCats(['Candy 1', 'Poppy 3', 'Nyx 2']);