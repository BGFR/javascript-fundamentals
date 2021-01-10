// 7. Class Vehicle 

class Vehicle {
    constructor(type, model, parts, fuel, drive) {
        let values = Object.values(parts);
        parts.quality = Number(values[0]) * Number(values[1]);
        this.type = type;
        this.model = model;
        this.parts = parts;
        this.fuel = fuel;
    }
    drive(loss) {
        this.fuel -= loss;
    }
}
