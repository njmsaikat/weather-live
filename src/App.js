import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//pages import
import Home from './pages/Home';

//navbar import
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function App() {
    return (
        <div>
            <Navbar />
            <Router>
                <Switch>
                    <Route
                        exact
                        path="/"
                        component={Home}
                    />
                </Switch>
            </Router>
            <Footer />
        </div>
    )
}
