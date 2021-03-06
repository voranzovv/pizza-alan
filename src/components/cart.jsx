import React, { Component } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import menu from "../Data/items";

let total = 0;

class CheckoutCart extends Component {
  state = {
    orders: [
      // { command: "addToCart", item: "brg", quantity: 10 },
      // { command: "addToCart", item: "brg", quantity: 10 },
    ],
  };
  handleOrder = () => {
    console.log("ordered!");
    alert("Your order will me ready in 15 minutes! Thank you..");
  };
  componentDidMount() {
    alanBtn({
      key:
        "1ec933b6e72d191aae0c2f2d218b962d2e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: (commandData) => {
        if (commandData.command === "addToCart") {
          let orders = [...this.state.orders, commandData];
          this.setState({ orders });
        }
      },
    });
  }
  render() {
    return (
      <div>
        {this.state.orders.length === 0 ? null : (
          <table className="table">
            <thead>
              <tr>
                <th>No</th>
                <th>Item</th>
                <th>Qty</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {!this.state.orders
                ? null
                : this.state.orders.map((o, index) => (
                    <tr key={index}>
                      {menu.map((m, idx) =>
                        m.id === o.item
                          ? ((total = total + m.price * o.quantity),
                            (
                              <React.Fragment key={idx}>
                                <td>{index + 1}</td>
                                <td>{m.title}</td>
                                <td>{o.quantity}</td>
                                <td>{`${m.price} X ${o.quantity} = ${
                                  m.price * o.quantity
                                }`}</td>
                              </React.Fragment>
                            ))
                          : null
                      )}
                    </tr>
                  ))}
            </tbody>
            <tfoot>
              <tr>
                <td>
                  <h2>
                    <div className="badge badge-success">Total:{total}</div>
                  </h2>
                </td>
                <td></td>
                <td></td>
                <td>
                  <button
                    className="btn btn-primary float-right"
                    onClick={() => this.handleOrder()}
                  >
                    Confirm
                  </button>
                </td>
              </tr>
            </tfoot>
          </table>
        )}
      </div>
    );
  }
}

export default CheckoutCart;
