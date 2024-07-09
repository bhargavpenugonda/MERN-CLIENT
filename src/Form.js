import React from 'react';
import './Form.css';
function Form() {
    return (
        <div className='form'>
            <form>
                <textarea name="message" placeholder="Enter Text"></textarea>
                <br></br>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Form;
