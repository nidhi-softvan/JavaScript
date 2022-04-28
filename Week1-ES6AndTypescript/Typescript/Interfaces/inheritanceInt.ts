interface Person{
    name:string
}

interface Musician extends Person{
    instrument:string
}

var drummer=<Musician>{}
drummer.name="ram"
drummer.instrument="drums"
console.log("name : "+drummer.name)
console.log("instrument : "+drummer.instrument)

