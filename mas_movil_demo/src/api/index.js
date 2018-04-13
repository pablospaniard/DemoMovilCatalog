import axios from 'axios';

const fetchPhones = async () => {
    axios.get('//www.mocky.io/v2/5918bc6b120000701040dbec')
        .then(response => {
            console.log('fetchPhones', response.data.phones);
            return response.data.phones;
        })
        .catch(error => {
            console.log(error);
        });
};

export default fetchPhones;