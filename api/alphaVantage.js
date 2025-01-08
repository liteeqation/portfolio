// portfolio/api/alphaVantage.js
import axios from 'axios';

const API_URL = 'https://www.alphavantage.co/query';
const API_KEY = '3SDAD2D513NE16N1'; // Replace with your actual API key

export const fetchStockData = async (symbol, interval = '5min') => {
    try {
        const response = await axios.get(API_URL, {
            params: {
                function: 'TIME_SERIES_INTRADAY',
                symbol: symbol,
                interval: interval,
                apikey: API_KEY,
            },
        });
        console.log('API Response:', response.data); // Add this line to see full response

        // Check if there are any error messages in the response
        if (response.data['Error Message']) {
            throw new Error(response.data['Error Message']);
        }

        const timeSeriesKey = `Time Series (${interval})`;
        const timeSeriesData = response.data[timeSeriesKey];

        if (!timeSeriesData) {
            throw new Error('Invalid data format from Alpha Vantage');
        }

        const latestTimestamp = Object.keys(timeSeriesData)[0];
        const latestData = timeSeriesData[latestTimestamp];

        const currentPrice = parseFloat(latestData['4. close']);
        const buyPrice = currentPrice;
        const change = ((currentPrice - buyPrice) / buyPrice) * 100;

        return {
            name: symbol,
            ticker: symbol,
            buyPrice: buyPrice,
            currentPrice: currentPrice,
            change: change,
        };
    } catch (error) {
        console.error("Error fetching stock data:", error);
        throw error;
    }
};

