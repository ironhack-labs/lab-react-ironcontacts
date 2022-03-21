import data from './contacts.json';
import './App.css';

const contacts = [
  {
    "name": "Idris Elba",
    "pictureUrl": "https://image.tmdb.org/t/p/w500/d9NkfCwczP0TjgrjpF94jF67SK8.jpg",
    "popularity": 11.622713,
    "id": "11731993-0604-4bee-80d5-67ad845d0a38",
    "wonOscar": false,
    "wonEmmy": false
  },
  {
    "name": "Ben Affleck",
    "pictureUrl": "https://image.tmdb.org/t/p/w500/cPuPt6mYJ83DjvO3hbjNGug6Fbi.jpg",
    "popularity": 9.157077,
    "id": "1599707e-5f49-4529-b920-db3831419b04",
    "wonOscar": true,
    "wonEmmy": false
  },
  {
    "name": "James McAvoy",
    "pictureUrl": "https://image.tmdb.org/t/p/w500/oPIfGm3mf4lbmO5pWwMvfTt5BM1.jpg",
    "popularity": 9.098376,
    "id": "fef2ac16-36df-486d-8d69-41f1bafa8101",
    "wonOscar": false,
    "wonEmmy": false
  },
  {
    "name": "Robin Wright",
    "pictureUrl": "https://image.tmdb.org/t/p/w500/cke0NNZP4lHRtOethRy2XGSOp3E.jpg",
    "popularity": 8.802542,
    "id": "5133d421-dc81-4e3a-81fa-57816da7ce60",
    "wonOscar": false,
    "wonEmmy": false
  },
  {
    "name": "Hugh Jackman",
    "pictureUrl": "https://image.tmdb.org/t/p/w500/oOqun0BhA1rLXOi7Q1WdvXAkmW.jpg",
    "popularity": 8.58347,
    "id": "1144413a-4d60-45e4-a51e-ec9ad321d835",
    "wonOscar": false,
    "wonEmmy": true
  },
]

function App() {
  return (
    <div className="App">
      {
        contacts.map((contact) => {
          return ()
        })
      }
    </div>
  );
}

export default App;
