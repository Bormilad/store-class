import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

const item = {
  brand: 'brand',
  title: 'title',
  description: 'description',
  descriptionFull: 'description full description full description full description full description full description full full description full',
  price: 123.00,
  currency: '$',
}

const ShopItemFunc = ({item}) => (
  <>
    <div class="main-content">
      <h2>{item.brand}</h2>
      <h1>{item.title}</h1>
      <h3>{item.description}</h3>
      <div class="description">{item.descriptionFull}</div>
      <div class="highlight-window mobile"><div class="highlight-overlay"></div></div>
      <div class="divider"></div>
      <div class="purchase-info">
        <div class="price">
          {item.currency}{Number(item.price).toFixed(2)}
          </div>
          <button>Добавить в корзину</button>
      </div>
    </div>
  </>
)

class ShopItemCl extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const user = this.props.item;
        return(
        <>
            <div class="main-content">
              <h2>{user.brand}</h2>
              <h1>{user.title}</h1>
              <h3>{user.description}</h3>
              <div class="description">{user.descriptionFull}</div>
              <div class="highlight-window mobile"><div class="highlight-overlay"></div></div>
              <div class="divider"></div>
              <div class="purchase-info">
                <div class="price">
                  {item.currency}{Number(item.price).toFixed(2)}
                  </div>
                  <button>Добавить в корзину</button>
              </div>
            </div>
        </>

        )
    }
}

function App() {
  return (
    <>
      <div className="container">
        <div className="background-element">
        </div>
        <div className="highlight-window">
          <div className='highlight-overlay'></div>
        </div>
        <div className="window">
          <ShopItemCl item={item} />

        </div>
      </div>
      </>
  );
}

export default App;
