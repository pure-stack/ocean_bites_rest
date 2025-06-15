export interface IRestaurant {
    id: string;
    name: string;
    description: string;
    food: IFood;
    staff: IStaff;
    rent: IRent;
}

type InputType = string;

export interface IFood {
    meat: InputType
    fruits: InputType
    dairy: InputType
    beverages: InputType
    other: InputType
}

export interface IStaff {
    kitchen: InputType
    front: InputType
    mgmt: InputType
    overtime: InputType
    training: InputType
}

export interface IRent {
    rent: InputType
    utils: InputType
    cleaning: InputType
    waste: InputType
    delivery: InputType
}
