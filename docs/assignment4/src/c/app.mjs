/**
 * @fileOverview  Auxiliary data management procedures
 * @Person Gerd Wagner 
 */
import Person from "../m/person.mjs";
import Movie from "../m/movie.mjs";

/*******************************************
 *** Auxiliary methods for testing **********
 ********************************************/
/**
 *  Create and save test data
 */
function generateTestData() {
  try {
    Person.instances["1"] = new Person({
      PersonId: 1,
      name: "Stephen Frears"
    });
    Person.instances["2"] = new Person({
      PersonId: 2,
      name: "George Lucas"
    });
    Person.instances["3"] = new Person({
      PersonId: 3,
      name: "Quentin Tarantino"
    });
    Person.instances["5"] = new Person({
      PersonId: 5,
      name: "Uma Thurman"
    });
    Person.instances["6"] = new Person({
      PersonId: 6,
      name: "John Travolta"
    });
    Person.instances["7"] = new Person({
      PersonId: 7,
      name: "Ewan McGregor"
    });
    Person.instances["8"] = new Person({
      PersonId: 8,
      name: "Natalie Portman"
    });
    Person.instances["8"] = new Person({
      PersonId: 8,
      name: "Keanu Reeves"
    });
    Person.saveAll();

    Movie.instances["1"] = new Movie({
      movieId: "1",
      title: "Pulp Fiction",
      releaseDate: new Date ("1994-05-12"),
      director_id: 3,
      actorIdRefs: [5,6]
    });
    Movie.instances["2"] = new Movie({
      movieId: "2",
      title: "Star Wars",
      releaseDate:new Date ("1977-05-25"),
      director_id: 2,
      actorIdRefs: [7,8]
    });
    Movie.instances["3"] = new Movie({
      movieId: "3",
      title: "I Am A Strange Loop",
      releaseDate:new Date ("1988-12-16"),
      director_id: 1,
      actorIdRefs: [9,5]
    });
    Movie.saveAll();
  } catch (e) {
    console.log( `${e.constructor.name}: ${e.message}`);
  }
}
/**
 * Clear data
 */
function clearData() {
  if (confirm( "Do you really want to delete the entire database?")) {
    try {
      Person.instances = {};
      localStorage["Persons"] = "{}";
      Movie.instances = {};
      localStorage["Movies"] = "{}";
      console.log("All data cleared.");
    } catch (e) {
      console.log( `${e.constructor.name}: ${e.message}`);
    }
  }
}

export { generateTestData, clearData };
