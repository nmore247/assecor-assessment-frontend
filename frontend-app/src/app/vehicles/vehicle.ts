export interface Vehicle {
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    max_atmosphering_speed: string;
    crew: string;
    passengers: string;
    cargo_capacity: string;
    consumables: string;
    vehicle_class: string;
    pilots: string[];  // Array of URLs for pilots
    films: string[];   // Array of URLs for films
    created: string;
    edited: string;
    url: string;
}
