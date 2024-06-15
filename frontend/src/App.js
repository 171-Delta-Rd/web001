import React, { useState } from 'react';

function App() {

  const [formData, setFormData] = useState({
    shipmentPickup: '',
    pickupZip: '',
    pickupType: '',
    deliveryZip: '',
    deliveryType: '',
    quantity: '',
    packagingType:'',
    length: '',
    width:'',
    height:'',
    totalWeight:'',
    freightClass:'',
    description:'',
    additionalService:'',
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // You can also add code to send formData to a server here
  };

  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="shipmentPickup">Shipment Pickup Date:</label>
        <input
          type="date"
          id="shipmengPickup"
          name="nshipmengPickup"
          value={formData.shipmentPickup}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="pickupZip">Pickup Zip:</label>
        <input
          type="text"
          id="text"
          name="text"
          value={formData.pickupZip}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="pickupType">Pickup Type:</label>
        <input
          id="pickupType"
          name="pickupType"
          value={formData.pickupType}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
