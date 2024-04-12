function createRegister(input) {

    let heroes = [];

    input.forEach(el => {
        const [name, level, items] = el.split(" / ");
        let hero = {
            name,
            level: Number(level),
            items,
        }

        heroes.push(hero);
    });

    heroes.sort((a, b) => a.level - b.level)
        .forEach(hero => {
            console.log(`Hero: ${hero.name} \nlevel => ${hero.level} \nitems => ${hero.items}`);
        })
}

createRegister([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);

createRegister([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
]);