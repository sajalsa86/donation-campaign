const getStoredDonatios = () => {
    const storedDonation = localStorage.getItem('donations');
    if (storedDonation) {
        return JSON.parse(storedDonation);
    }
    return [];
};

const saveDonation = id => {
    const storedDonatios = getStoredDonatios();
    const exists = storedDonatios.find(donateId => donateId === id);
    if (!exists) {
        storedDonatios.push(id);
        localStorage.setItem('donations', JSON.stringify(storedDonatios));
        return true; // Indicate that job application was successfully saved
    }
    return false; // Indicate that job application already exists
};

export { getStoredDonatios, saveDonation };
