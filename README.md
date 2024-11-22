# Theses by Graphic design department of the Royal Academy of Art, The hague

Last updated on 17 December 2021.

## Add new class

1. Go to `/js` directory
2. Open `thesesClasses.js`
3. Copy and paste a single class object, for further information on this object see below
4. Fill out the right information
5. Make sure student names are ordered on their last name

## Class object

- The `id` key is a string with the starting year and ending year of the class, seperated by an m-dash.
- The `url` key is a string holding the URL of the class's theses index page is found
- The `students` key is an array with their names

#### Example class object:
````
{
    id: "2016—2017",
    url: "https://kabk.github.io/go-theses-17/",
    students: [
        "Fay Asselbergs",
        "Remco Blom",
        "Laura de Rijk",
        "Jamie de Rooij",
        "Noa Defesche",
        "Alice Fialova",
        "Katerina Gaidamaka",
        "Amaya Hagelaar",
        "Marton Kabai",
        "Ninthe Kiemeneij",
        "Carmel Klein",
        "Haewon Lim",
        "Carlijn Moerenhout",
        "Manus Nijhoff",
        "Yacinth Pos",
        "Jordy Ringeling",
        "Pascal Schilp",
        "Antonia Schwaiger",
        "Magda Skibinska",
        "Jaap Smit",
        "Sean Valies",
        "Lisa van den Heuvel",
        "Wies van der Wal",
        "Janne van Hooff",
        "Bohye Woo"
    ]
}
````

## License

This project is released under…?

---

👋 2021, Martijn de Heer, [Apt Opt Out](https://github.com/aptoptout)

👋 2017, Eric Schrijver, [codingisacopingstrategy](https://github.com/codingisacopingstrategy)