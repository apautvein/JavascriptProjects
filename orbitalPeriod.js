function orbitalPeriod(satellites) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;

    const result = satellites.map(satellite => {
        let radiusPlusAltitude = earthRadius + satellite.avgAlt
        let powerOf = Math.pow(radiusPlusAltitude, 3);
        let division = powerOf / GM;
        let sqrRoot = Math.sqrt(division);
        let orbitalPeriodInSeconds = 2 * Math.PI * sqrRoot;
        let orbitalPeriodRounded = Math.round(orbitalPeriodInSeconds);
        return { name: satellite.name, orbitalPeriod: orbitalPeriodRounded }
    })
    return result;
}

orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);