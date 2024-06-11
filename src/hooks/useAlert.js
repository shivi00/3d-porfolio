import { useState } from 'react';

const useAlert = () => {
    const [alert, setAlert] = useState({ show: false, text: '', type: 'danger' });

    // Destructure the alert
    const showAlert = ({ text, type = 'danger' }) => setAlert({ show: true, text, type });
    const hideAlert = () => setAlert({ show: false, text: '', type: 'danger' });

    // Hooks don't return the jsx component they often return array or objects
    return { alert, showAlert, hideAlert };
};

export default useAlert;
