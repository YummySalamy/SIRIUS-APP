import React from 'react';

const SettingsPage = () => {
  return (
    <div>
        <h1>Settings</h1>
        <p>Customize your experience with Sirius.</p>
        <div className='slider'>
            <input type='range' min='0' max='100' defaultValue='50' className='slider' id='volume' />
            <label htmlFor='volume'>Arbitrary Physics parameter xd</label>
        </div>
    </div>
  );
};

export default SettingsPage;