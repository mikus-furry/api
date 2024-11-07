# API Documentation

### Welcome

---

### Python Code

```python
import requests
import random

# URL API
url = 'https://mikus-api.glitch.me/api/v1/hug'

# GET request to the API
response = requests.get(url)

if response.status_code == 200:
    data = response.json()
    
    # Get all image URLs
    images = data.get('results', [])
    
    if images:
        # Choose a random image
        random_image = random.choice(images)
        print('Huggy Random Furry image:', random_image['url'])
    else:
        print('Furry hugs not Found :C')
else:
    print('Failed to get data from API:', response.status_code)
```

Check out all the Python libraries!

---

### Node.js

```javascript
const axios = require('axios');

// URL API
const url = 'https://mikus-api.glitch.me/api/v1/hug';

// GET request to the API
axios.get(url)
  .then(response => {
    const data = response.data;
    const images = data.results;

    if (images.length > 0) {
      // Choose a random image
      const randomImage = images[Math.floor(Math.random() * images.length)];
      console.log('Huggy Random Furry image', randomImage.url);
    } else {
      console.log('Furry hugs not Found :C');
    }
  })
  .catch(error => {
    console.log('ops error API:', error);
  });
```

Make sure to install the **"axios"** library.

---

### BDFD (Bot Designer For Discord)

```bash
$nomention
<@$authorID> hug $message[1]
$httpGet[https://mikus-api.glitch.me/api/v1/hug]
$image[$httpResult[results;0;url];yes;yes]]
```

Use **BDScript 2** for accurate and reliable commands.

---
