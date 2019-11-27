export class Marker {
    constructor(
        public latitude: number,
        public longitude: number,
        public title: string,
        public icon: string,
        public associatedContent?: Content[],
        public description?: string,
        public date?: string,
        public featuredImage?: string,
        public iconHeight = 20,
        public iconWidth = 20,
    ) { }
}

export enum ContentType {
    IMAGE = 'IMAGE',
    TEXT = 'TEXT',
    INSTAGRAM_POST = 'INSTAGRAM_POST'
}

export class Content {
    constructor(
        public type: ContentType,
        public url: string,
        public body?: string
    ) { }
}

export class Coordinates {
    constructor(
        public latitude: number,
        public longitude: number,
    ) { }
}

export class CoordinateBoundaries {
    constructor(
        public minLatitude: number,
        public maxLatitude: number,
        public minLongitude: number,
        public maxLongitude: number
    ) { }
}

export class EarthInteractions {
    constructor(
        public mapCenter: Coordinates,
        public mapBoundaries: CoordinateBoundaries,
    ) { }
}


export class Address {
    constructor(
        public street: string,
        public country: string,
        public county: string,
        public city: string
    ) { }
}
