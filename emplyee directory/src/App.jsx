import './App.css'
import Header from './routes/Header'
import EmployeeList from './routes/EmployeeList'
import SearchBar from './routes/SearchBar'
import EmployeeListItem from './routes/EmployeeListItem'
import Homepage from './routes/Homepage'

function App() {

  return (
    <>
      <Homepage/>
      <Header/>
      <SearchBar/>
      <EmployeeList/>
      <EmployeeListItem/>
    </>
  )
}

export default App
