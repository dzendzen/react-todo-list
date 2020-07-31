import React, { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";
import { v4 as uuidv4 } from "uuid";
uuidv4();

class App extends Component {
  state = {
    items: [],
    id: uuidv4(),
    item: "",
    editItem: false,
  };

  handleChange = (e) => {
    // console.log(e, "handle Change");
    this.setState({ item: e.target.value });
  };
  handleSubmit = (e) => {
    // console.log(e, "handle Submit");
    e.preventDefault();
    const newItem = { id: this.state.id, title: this.state.item };
    const updatedItems = [...this.state.items, newItem];

    this.setState({
      items: updatedItems,
      item: "",
      id: uuidv4(),
      editItem: false,
    });
  };
  clearList = () => {
    console.log("clear List");
  };
  handleEdit = (id) => {
    console.log(`handle edit ${id}`);
  };
  handleDelete = (id) => {
    console.log(`handle delete ${id}`);
  };
  render() {
    console.log(this.state);
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-8 mt-4">
              <h3 className="text-capitalize text-center">todo input</h3>
              <TodoInput
                item={this.state.item}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                editItem={this.state.editItem}
              />
              <TodoList
                items={this.state.items}
                clearList={this.clearList}
                handleDelete={this.handleDelete}
                handleEdit={this.handleEdit}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
