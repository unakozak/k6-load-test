import http from 'k6/http'; // importing http clients
import { Rate } from 'k6/metrics';
import { check } from 'k6'; 


const failures = new Rate('failed require');


export const options = {
  vus : 10, //adding virtual users 
  duration : '10s',
};

export default function () {
  const result = http.get("https://api.publicapis.org/entries");
  check(result, {
    'http status code is 200' : r => r.status === 200,
  });
}

