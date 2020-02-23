import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import store  from './redux/store';
import Header from './components/Header'
import EmployeeList from './components/EmployeeList'
// import EmployeeCreate from './components/EmployeeCreate'
// import EmployeeEdit from './components/EmployeeEdit'
// import EmployeeDelete from './components/EmployeeDelete'
import EmployeeShow from './components/EmployeeShow'

const App = () => {
  return (
    <div className='ui container'>
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path='/' exact component={EmployeeList} />
                    {/* <Route path='/employee/create' exact component={EmployeeCreate} />
                    <Route path='/employee/edit/:id' exact component={EmployeeEdit} />
                    <Route path='/employee/delete/id' exact component={EmployeeDelete} /> */}
                    <Route path='/employee/:id' exact component={EmployeeShow} />
                </Switch>
            </div>
        </BrowserRouter>
        </Provider>
    </div>
  )
}

export default App
