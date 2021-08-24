export default class DummySwapiService {

  state = {
    leftData: [
        {id: 0, title: 'Left 0'},
        {id: 1, title: 'Left 1'},
        {id: 2, title: 'Left 2'},
    ],
    middleData: [
        {id: 3, title: 'Middle 0'},
        {id: 4, title: 'Middle 1'},
        {id: 5, title: 'Middle 2'},
    ],
    rightData: [
        {id: 6, title: 'Right 0'},
        {id: 7, title: 'Right 1'},
        {id: 8, title: 'Right 2'},
    ]
}


  getAllPeople = async () => {
    return this._people;
  };

  getPerson = async () => {
    return this._people[0];
  };

  getAllPlanets = async () => {
    return this._planets;
  };

  getPlanet = async () => {
    return this._planets[0]
  };

  getAllStarships = async () => {
    return this._starships;
  };

  getStarship = async () => {
    return this._starships[0];
  };

  /*getPersonImage = ({id}) => {
    return `${this._imageBase}/characters/10.jpg`
  };

  getStarshipImage = ({id}) => {
    return `${this._imageBase}/starships/5.jpg`
  };

  getPlanetImage = ({id}) => {
    return `${this._imageBase}/planets/5.jpg`
  };*/

 getPersonImage = () => {
    return `https://placeimg.com/400/500/people`
  };

  getStarshipImage = () => {
    return `https://placeimg.com/600/400/tech`;
  };

  getPlanetImage = () => {
    return `https://placeimg.com/400/400/nature`
  };

}
