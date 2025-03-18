document.getElementById('sitemap-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const url = document.getElementById('url').value;
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = 'Generating sitemap...';

    try {
        const response = await fetch('https://sitemap-generator-backend-2.onrender.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ url })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        resultDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    } catch (error) {
        resultDiv.innerHTML = `Error: ${error.message}`;
    }
});
