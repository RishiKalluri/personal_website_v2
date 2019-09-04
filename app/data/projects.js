// TODO Add a couple lines about each project
const data = [
  {
    title: 'Cryptocurrency Sentiment Analysis',
    subtitle: 'Created for hackathon, to analyze and predict crypto price trends',
    link: 'https://devpost.com/software/harvest',
    image: '/images/projects/crypto.png',
    date: '2019-06-07',
    desc: 'Created analysis tool for crypto pricing: '
      + 'Created cryptocurrency analysis application to webscrape crypto-relevant articles '
      + 'and analyze the information with NLP Sentiment Analysis through IBM Watson. The data '
      + 'was then inputted into a KNN regression model to predict the price trend.',
  },
  {
    title: 'Kernel',
    subtitle: 'A functional x86 kernel',
    link: 'https://github.com/rishidk22/kernel',
    image: '/images/projects/kernel_image.png',
    date: '2019-05-02',
    desc: 'A functional x86 kernel: '
      + 'This kernel is a basic x86 kernel, supporting simple functionality. It was built'
      + 'with a read-only file system, paging and virtual memory to allow for program execution, '
      + 'and a task scheduler to allow for processes to run efficiently.',
  }, {
    title: 'Space Potato',
    subtitle: 'A kickstarter funded potato powered weather balloon.',
    link: 'http://www.spacepotato.org',
    image: '/images/projects/spacepotato.jpg',
    date: '2015-06-28',
    desc: 'Launched a potato battery powered weather balloon with two cameras '
      + 'and gps transponder. Resulting photos were published in a coffee table book. '
      + 'You can email me for a copy.',
  }, {
    title: 'IoT Arduino LED',
    subtitle: 'An implementation of connnecting an Arduino to the internet',
    link: 'https://github.com/rishidk22/iot_arduino',
    image: '/images/projects/arduino.jpeg',
    date: '2018-08-20',
    desc: 'Basic IoT Arduino: '
     + 'Wired an Arduino to connect to the internet and turn on an LED based on web input. Then, '
     + 'implemented API so Arduino could poll the API to see if the LED should be switched on or off',
  },
];

export default data;
