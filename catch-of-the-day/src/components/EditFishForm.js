import React from 'react';
import { formatPrice } from '../helpers';
class EditFishForm extends React.Component {
    handleChange = event => {
        const updatedFish = {
            ...this.props.fish,
            [event.currentTarget.name]: event.currentTarget.value
        };
        this.props.updateFish(this.props.index, updatedFish);
    };
    render() {
        return (
            <form className="fish-edit" onSubmit={this.createFish}>
                <input
                    type="text"
                    name="name"
                    ref={this.nameRef}
                    placeholder="Name"
                    value={this.props.fish.name}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="price"
                    ref={this.priceRef}
                    placeholder="Price"
                    value={formatPrice(this.props.fish.price)}
                    onChange={this.handleChange}
                />
                <select
                    name="status"
                    ref={this.statusRef}
                    value={this.props.fish.status}
                    onChange={this.handleChange}>
                    <option value="available">Fresh</option>
                    <option value="unavailable">Sold Out</option>
                </select>
                <textarea
                    name="desc"
                    ref={this.descRef}
                    placeholder="Description"
                    value={this.props.fish.desc}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="image"
                    ref={this.imageRef}
                    placeholder="image"
                    value={this.props.fish.image}
                    onChange={this.handleChange}
                />
                <button type="submit">+ Edit Fish</button>
                <button onClick={() => this.props.deleteFish(this.props.index)}>
                    Remove Fish
                </button>
            </form>
        );
    }
}

export default EditFishForm;
