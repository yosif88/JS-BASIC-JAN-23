function circle(args){
    let radius = Number(args[0]);

    let area = Math.PI * radius * radius;
    console.log(area.toFixed(2));

    let perimeter = 2 * Math.PI * radius;
    console.log(perimeter.toFixed(2));
}
circle(["3"])