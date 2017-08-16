# WEB2010 Final Exam

<!-- 1. In the app.js file, use $.ajax() with the dog_api to get all the breeds of dogs. Read the API docs (https://dog.ceo/dog-api/) to figure out which URL you should use. Log the response to the console. The response should have a "message" property, which should be an Object that contains all the dog breeds as its properties. -->

<!-- 2. The Object.keys() function will create an array of the properties from the object you pass to it as a parameter. Create an array of dog breeds by passing the response.message object to the Object.keys() function as a parameter. Save the return value of Object.keys() in a variable called breeds. Log the breeds array to the console to make sure it has an array of dog breed strings, then delete the console log. -->

<!-- 3. For each breed in the breeds array you created in step 2, create an option HTML element (with javascript) and place it inside the select element. Each option element should have a breed inside of it. If it works correctly, the select element will show a dropdown list of dog breeds when you click on it. -->

<!-- 4. Next, we want our Dog App to display a picture of the selected dog breed when the user clicks on the View Dog button. Listen for clicks on the viewDog button. -->

<!-- 5. When a user clicks on the viewDog button, create a variable called breedName and assign to it the value of the select element (the selected dog breed). Log the breedName to the console to make sure it has the selected dog breed, then delete the console log. -->

<!-- 6. Use $.ajax() to get a random image of the selected breed. Look at the Dog API docs under the "By Breed" section (https://dog.ceo/dog-api/#breed) to figure out what $.ajax's url property should be. HINT: You will need to use the breedName variable in the url. Log the response to the console to make sure it has an image URL in the message property, then delete this console log. -->

7. Using the setAttribute function (https://www.w3schools.com/Jsref/met_element_setattribute.asp), set the img element's src attribute to the image URL from inside response.message. If it works correctly, this will display an image of a dog on the page.
