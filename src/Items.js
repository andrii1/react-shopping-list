import React from "react";

class Items extends React.Component {
  render() {
    const { items1 } = this.props;
    return (
      <div>
        <p className="items">Items</p>
        {items1.map((item, id) => (
          <ol className="item-list" key={id}>
            {items1[id]}
          </ol>
        ))}
        <button onClick={this.props.handleDelete}>Delete Last Item</button>
      </div>
    );
  }
}

export default Items;
