import React, { useState } from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import {
    BrowserRouter,
    Switch,
    Route,
    Link,
    useRouteMatch,
} from "react-router-dom";
import Cart from "./Pages/Cart";

export default function MainRouter() {
    const [cart, setCart] = useState([]);

    return (
        <Switch>
            <Route exact path="/">
                <Home cart={cart} setCart={setCart} />
            </Route>
            <Route path="/cart">
                <Cart cart={cart} setCart={setCart} />
            </Route>
            <Route path="/about">
                <About cart={cart} setCart={setCart} />
            </Route>
        </Switch>
    )
}