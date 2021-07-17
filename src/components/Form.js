import React, { useState } from "react";
import '../styles.scss';

const Form = ({initialPost, handleSubmit, buttonLabel, loadPost}) => {
    // const [city, setCity] = useState(null);
    const [formData, setFormData] = useState(initialPost);
    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    };

    const handleSubmission = (event) => {
        event.preventDefault();
        handleSubmit(formData);
    };
    
    return (
        <form onSubmit={handleSubmission}>
            <input
                type="text"
                onChange={handleChange}
                value={formData.available_date}
                name="available_date"
                placeholder="Available Date"
            />
            <input
                type="text"
                onChange={handleChange}
                value={formData.zip_code}
                name="zip_code"
                placeholder="Zip Code"
            />
            <input
                type="text"
                onChange={handleChange}
                value={formData.contact_email}
                name="contact_email"
                placeholder="Contact Email"
            />
            <input
                type="text"
                onChange={handleChange}
                value={formData.image}
                name="image"
                placeholder="Image URL"
            />
            <input
                type="text"
                onChange={handleChange}
                value={formData.wifi}
                name="wifi"
                placeholder="Wifi"
            />
            <input
                type="text"
                onChange={handleChange}
                value={formData.water}
                name="water"
                placeholder="Water"
            />
            <input
                type="text"
                onChange={handleChange}
                value={formData.twenty_hookup}
                name="twenty_hookup"
                placeholder="Twenty Hook-Up"
            />
            <input
                type="text"
                onChange={handleChange}
                value={formData.thirty_hookup}
                name="thirty_hookup"
                placeholder="Thirty Hook-Up"
            />
            <input
                type="text"
                onChange={handleChange}
                value={formData.fifty_hookup}
                name="fifty_hookup"
                placeholder="Fifty Hook-Up"
            />
            <input type="submit" value={buttonLabel}/>
        </form>
    );
};

export default Form;