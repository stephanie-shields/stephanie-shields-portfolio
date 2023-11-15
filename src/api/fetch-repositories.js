import axios from 'axios';

const fetchRepositories = async () => {
  try {
    const response = await axios.get('https://api.github.com/users/stephanie-shields/repos');
    console.log(response.data); // logs the response data to the console
    return response.data;
  } catch (error) {
    console.error('Error fetching data: ', error);
    return [];
  }
};

export default fetchRepositories;