import { useEffect, useState } from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { getStoredDonatios } from '../LocalStorage/LocalStorage';
import { useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
const Statistics = () => {
    const allDonations = useLoaderData();

    const [donations, setDonations] = useState([]);
    const [totalDonations, setTotalDonations] = useState(0);

    useEffect(() => {
        const storedDonations = getStoredDonatios(); // Assuming this function retrieves your stored donations
        setDonations(storedDonations);
        setTotalDonations(allDonations.length);
    }, [allDonations]);

    const calculatePercentage = (value) => {
        return ((value / totalDonations) * 100).toFixed(2); // Calculate the percentage of a value relative to total donations
    };

    const COLORS = ['#8884d8', '#82ca9d']; // Colors for the pie chart segments

    // Prepare data for the pie chart
    const data = [
        { name: 'Your Donation', value: donations.length },
        { name: 'Total Donations', value: totalDonations }
    ];

    return (
        <div className='w-4/5 mx-auto' style={{ width: '100%', height: '400px' }}>
            <Helmet>
                <title>
                    Statistics | Page
                </title>
            </Helmet>
            <ResponsiveContainer>
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="value"
                        cx="50%"
                        cy="50%"
                        outerRadius={60}
                        fill="#8884d8"
                        label={({ name, value }) => { // Custom label rendering function
                            if (name === 'Your Donation') {
                                return `${name} (${calculatePercentage(value)}%)`; // Display percentage only for 'Your Donation'
                            } else {
                                return `${name} : ${allDonations.length}`; // Display name only for 'Total Donations'
                            }
                        }}
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;