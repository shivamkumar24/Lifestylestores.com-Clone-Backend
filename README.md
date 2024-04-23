# Lifestylestores Clone (Outfit) Backend API

This project is a backend server for lifestylestore.com clone Project. It provides RESTFUL APIs for managing and retrieving e-commerce operations performed.

## Base URL:

The API is currently deployed at: https://calm-tutu-bass.cyclic.app/

## Installation

1. Clone the repository:

   ```bash
     git clone https://github.com/shivamkumar24/Lifestylestores.com-Clone-Backend
   ```

2. Add .env file and put data:

   ```bash
     mongoUR=
     PORT=
   ```

3. Install dependencies:

   ```bash
     npm install
   ```

4. Start the server:
   ```bash
     npm run server
   ```

## End Points:

1. USER:

   1. Get User

      - Endpoint: `/user`
      - Method: `GET`
      - Description: Fetches all the user entries from the backend.
      - Response: An array of users objects.

   2. Register User

      - Endpoint: `/user/register`
      - Method: `POST`
      - Description: Post user data for registration on frontend.
      - Response: A line which tell you Registration is successful or any error occur.

   3. Login User

      - Endpoint: `/user/login`
      - Method: `POST`
      - Description: Post user data for login on frontend.
      - Response: A line which tell you login is successful or any error occur.

   4. Delete User

      - Endpoint: `/user/delete/:id`
      - Method: `DELETE`
      - Description: Delete the user data by user ID.
      - Response: A line which tell you delete is successful or any error occur..

2. ADMIN:

   1. Get Admin

   - Endpoint: `/admin`
   - Method: `GET`
   - Description: Fetches all the admin entries from the backend.
   - Response: An array of admins objects.

   2. Register Admin

      - Endpoint: `/admin/register`
      - Method: `POST`
      - Description: Post admin data for registration on frontend.
      - Response: A line which tell you Registration is successful or any error occur.

   3. Login Admin

      - Endpoint: `/admin/login`
      - Method: `POST`
      - Description: Post admin data for login on frontend.
      - Response: A line which tell you login is successful or any error occur.

   4. Delete Admin

      - Endpoint: `/admin/delete/:id`
      - Method: `DELETE`
      - Description: Delete the admin data by admin ID.
      - Response: A line which tell you delete is successful or any error occur..

3. MEN:

   1. Get Men

      - Endpoint: `/men`
      - Method: `GET`
      - Description: Fetches all the mens entries from the backend. You can get mens data by applying sort(by price), order and category.
      - Response: An array of mens objects.

   2. Get Single Men

      - Endpoint: `/men/:id`
      - Method: `GET`
      - Description: Fetches single men data from the backend.
      - Response: An array of single men object.

   3. Add New Men

      - Endpoint: `/men/add`
      - Method: `POST`
      - Description: Post men data for new entries.
      - Response: A line which tell you add new men data is successful or any error occur.

   4. Update Men

      - Endpoint: `/men/update/:id`
      - Method: `PATCH`
      - Description: Update men data by using product ID.
      - Response: A line which tell you men data update is successful or any error occur.

   5. Delete Men

      - Endpoint: `/men/delete/:id`
      - Method: `DELETE`
      - Description: Delete the men data by product ID.
      - Response: A line which tell you delete is successful or any error occur.

4. WOMEN:

   1. Get Women

      - Endpoint: `/women`
      - Method: `GET`
      - Description: Fetches all the womens entries from the backend. You can get womens data by applying sort(by price), order and category.
      - Response: An array of womens objects.

   2. Get Single Women

      - Endpoint: `/women/:id`
      - Method: `GET`
      - Description: Fetches single women data from the backend.
      - Response: An array of single women object.

   3. Add New Women

      - Endpoint: `/women/add`
      - Method: `POST`
      - Description: Post women data for new entries.
      - Response: A line which tell you add new women data is successful or any error occur.

   4. Update Women

      - Endpoint: `/women/update/:id`
      - Method: `PATCH`
      - Description: Update women data by using product ID.
      - Response: A line which tell you women data update is successful or any error occur.

   5. Delete Women

      - Endpoint: `/women/delete/:id`
      - Method: `DELETE`
      - Description: Delete the women data by product ID.
      - Response: A line which tell you delete is successful or any error occur.

5. KID:

   1. Get Kid

      - Endpoint: `/kid`
      - Method: `GET`
      - Description: Fetches all the kids entries from the backend. You can get kids data by applying sort(by price), order and category.
      - Response: An array of kids objects.

   2. Get Single Kid

      - Endpoint: `/kid/:id`
      - Method: `GET`
      - Description: Fetches single kid data from the backend.
      - Response: An array of single kid object.

   3. Add New Kid

      - Endpoint: `/kid/add`
      - Method: `POST`
      - Description: Post kid data for new entries.
      - Response: A line which tell you add new kid data is successful or any error occur.

   4. Update Kid

      - Endpoint: `/kid/update/:id`
      - Method: `PATCH`
      - Description: Update kid data by using product ID.
      - Response: A line which tell you kid data update is successful or any error occur.

   5. Delete Kid

      - Endpoint: `/kid/delete/:id`
      - Method: `DELETE`
      - Description: Delete the kid data by product ID.
      - Response: A line which tell you delete is successful or any error occur.

6. SHOES:

   1. Get Shoes

      - Endpoint: `/shoes`
      - Method: `GET`
      - Description: Fetches all the shoes entries from the backend. You can get shoes data by applying sort(by price), order and category.
      - Response: An array of shoes objects.

   2. Get Single Shoes

      - Endpoint: `/shoes/:id`
      - Method: `GET`
      - Description: Fetches single shoes data from the backend.
      - Response: An array of single shoes object.

   3. Add New Shoes

      - Endpoint: `/shoes/add`
      - Method: `POST`
      - Description: Post shoes data for new entries.
      - Response: A line which tell you add new shoes data is successful or any error occur.

   4. Update Shoes

      - Endpoint: `/shoes/update/:id`
      - Method: `PATCH`
      - Description: Update shoes data by using product ID.
      - Response: A line which tell you shoes data update is successful or any error occur.

   5. Delete Shoes

      - Endpoint: `/shoes/delete/:id`
      - Method: `DELETE`
      - Description: Delete the shoes data by product ID.
      - Response: A line which tell you delete is successful or any error occur.

7. BAG:

   1. Get Bags

      - Endpoint: `/bag`
      - Method: `GET`
      - Description: Fetches all the bags entries from the backend. You can get shoes data by applying sort(by price), order and category.
      - Response: An array of bags objects.

   2. Get Single Bag

      - Endpoint: `/bag/:id`
      - Method: `GET`
      - Description: Fetches single bag data from the backend.
      - Response: An array of single bag object.

   3. Add New Bag

      - Endpoint: `/bag/add`
      - Method: `POST`
      - Description: Post bag data for new entries.
      - Response: A line which tell you add new bag data is successful or any error occur.

   4. Update Bag

      - Endpoint: `/bag/update/:id`
      - Method: `PATCH`
      - Description: Update bag data by using product ID.
      - Response: A line which tell you bag data update is successful or any error occur.

   5. Delete Bag

      - Endpoint: `/bag/delete/:id`
      - Method: `DELETE`
      - Description: Delete the bag data by product ID.
      - Response: A line which tell you delete is successful or any error occur.

8. BEAUTY:

   1. Get Beautyes

      - Endpoint: `/beauty`
      - Method: `GET`
      - Description: Fetches all the beauty entries from the backend. You can get beauty data by applying sort(by price), order and category.
      - Response: An array of beauty objects.

   2. Get Single Beauty

      - Endpoint: `/beautyhoes/:id`
      - Method: `GET`
      - Description: Fetches single beauty data from the backend.
      - Response: An array of single beauty object.

   3. Add New Beauty

      - Endpoint: `/beauty/add`
      - Method: `POST`
      - Description: Post beauty data for new entries.
      - Response: A line which tell you add new beauty data is successful or any error occur.

   4. Update Beauty

      - Endpoint: `/beauty/update/:id`
      - Method: `PATCH`
      - Description: Update beauty data by using product ID.
      - Response: A line which tell you beauty data update is successful or any error occur.

   5. Delete Beauty

      - Endpoint: `/beauty/delete/:id`
      - Method: `DELETE`
      - Description: Delete the beauty data by product ID.
      - Response: A line which tell you delete is successful or any error occur.

9. ALL-PRODUCTS:

   1. Get AllProducts

      - Endpoint: `/allproduct`
      - Method: `GET`
      - Description: Fetches all the allProducts entries from the backend. You can get shoes data by applying sort(by price), order and category.
      - Response: An array of allProducts objects.

   2. Add New Product

      - Endpoint: `/allproduct/add`
      - Method: `POST`
      - Description: Post product data for new entries.
      - Response: A line which tell you add new product data is successful or any error occur.

   3. Update Product

      - Endpoint: `/allproduct/update/:id`
      - Method: `PATCH`
      - Description: Update product data by using product ID.
      - Response: A line which tell you product data update is successful or any error occur.

   4. Delete Product

      - Endpoint: `/allproduct/delete/:id`
      - Method: `DELETE`
      - Description: Delete the product data by product ID.
      - Response: A line which tell you delete is successful or any error occur.

10. CART:

11. Get Cart

    - Endpoint: `/cart`
    - Method: `GET`
    - Description: Fetches all the cart entries from the backend. You can get shoes data by applying sort(by price), order and category.
    - Response: An array of cart objects.

12. Add New Product

    - Endpoint: `/cart/add`
    - Method: `POST`
    - Description: Post product data in cart.
    - Response: A line which tell you add new product data is successful or any error occur.

13. Delete Product

    - Endpoint: `/cart/delete/:id`
    - Method: `DELETE`
    - Description: Delete the product data by product ID.
    - Response: A line which tell you delete is successful or any error occur.

### Deployed Backend

This setup ensures a seamless flow for managing and tracking data entries through a simple and intuitive API.
