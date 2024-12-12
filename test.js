


const request = async() => {
    const response = await fetch('http://localhost:3000');
    const text = await response.text();
    console.log(text);
};

for (let i = 0; i < 10; i++) {
    request();
}