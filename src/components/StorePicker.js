import React from 'react';//you will always need to import react into your components
import PropTypes from 'prop-types';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
    //every class needs atleast 1 method to render
    myInput = React.createRef();

    static propTypes = {
        history: PropTypes.object
    };

    goToStore = (event) => {
        //stop form from submitting
        event.preventDefault();
        //get text from that input
        const storeName = this.myInput.value.value;
        //change the page to /store/whatever-they-entered
        this.props.history.push(`/store/${storeName}`);
    }
   
    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please Enter A Store</h2>
                <input 
                    type="text" 
                    ref={this.myInput} 
                    required 
                    placeholder="Store Name" 
                    defaultValue={getFunName()} 
                />
                <button type="submit">Visit Store</button>
            </form>
        );
    }
}

export default StorePicker;