# API Documentation

### Welcome

![Banner](https://cdn.discordapp.com/attachments/1295047950497742938/1304053244632240148/meta-og-doc-template.jpg?ex=672dfdb9&is=672cac39&hm=38e9475338619c010c36045b21f4072e6b49744d4f4b456f1ff1669a004dd9b5&)

---

### Python Code

```python
import requests

# URL API
url = 'https://mikus-api.glitch.me/api/v1/hug'

# GET request to the API
response = requests.get(url)

if response.status_code == 200:
    data = response.json()
    
    # Get image URL
    image_url = data.get('imageUrl', None)
    
    if image_url:
        print('Huggy Random Furry image:')
        print(image_url)
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
const url = 'https://mikus-api.glitch.me/api/v1/hug'; // Заміни на потрібний URL

// GET request to the API
axios.get(url)
  .then(response => {
    // Get data from the response
    const data = response.data;

    // Get the URL of the image
    const imageUrl = data.imageUrl;

    if (imageUrl) {
      console.log('Huggy Random Furry image:');
      console.log(imageUrl);
    } else {
      console.log('Furry hugs not Found :C');
    }
  })
  .catch(error => {
    console.error('Failed to get data from API:', error.response ? error.response.status : error.message);
  });

```

Make sure to install the **"axios"** library.

---

### BDFD (Bot Designer For Discord)

```bash
$nomention
<@$authorID> hug $message[1]
$httpGet[https://mikus-api.glitch.me/api/v1/hug]
$image[$httpResult[imageUrl;0;url];yes;yes]]
```

Use **BDScript 2** for accurate and reliable commands.

---
