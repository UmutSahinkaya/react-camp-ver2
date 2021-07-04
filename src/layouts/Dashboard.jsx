import React from 'react'
import ProductList from "../pages/ProductList";
import Categories from "./Categories";
import { Grid, GridColumn } from 'semantic-ui-react'
import { Route } from 'react-router-dom';
import ProductDetail from '../pages/ProductDetail';
import CartDetail from '../pages/CartDetail';
export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <GridColumn width={4}>
                        <Categories />
                    </GridColumn>
                    <GridColumn width={12}>
                        <Route exact path="/" component={ProductList}/>
                        <Route exact path="/products" component={ProductList}/>
                        <Route path="/products/:name" component={ProductDetail}/>
                        <Route path="/cart" component={CartDetail}/>
                    </GridColumn>
                </Grid.Row>
            </Grid>


        </div>
    )
}
