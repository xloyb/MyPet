

# **MyPet - for Animal adoption organizations**

Welcome to MyPet, where the passion for pet adoption meets the expertise of MyDevify.com. Our platform, powered by MyDevify.com's cutting-edge development tools and expertise, revolutionizes the way homeless pets find loving homes.


## Showcase
  
  
| ![Image 1](https://github.com/mydevify/MyPet/blob/main/mypet/showcase/dark/Dashboard.PNG) | ![Image 2](https://github.com/mydevify/MyPet/blob/main/mypet/showcase/light/Dashboard.PNG) |
|-------------------------|-------------------------|
| ![Image 3](https://github.com/mydevify/MyPet/blob/main/mypet/showcase/dark/Home.PNG)| ![Image 4](https://github.com/mydevify/MyPet/blob/main/mypet/showcase/light/Home.PNG) |
| ![Image 5](https://github.com/mydevify/MyPet/blob/main/mypet/showcase/dark/ModCP.PNG)| ![Image 6](https://github.com/mydevify/MyPet/blob/main/mypet/showcase/light/ModCP.PNG) |
| ![Image 7](https://github.com/mydevify/MyPet/blob/main/mypet/showcase/dark/Managing_Requests.PNG)| ![Image 8](https://github.com/mydevify/MyPet/blob/main/mypet/showcase/light/Managing_Requests.PNG) |
| ![Image 9](https://github.com/mydevify/MyPet/blob/main/mypet/showcase/dark/PetsList.PNG)| ![Image 10](https://github.com/mydevify/MyPet/blob/main/mypet/showcase/light/PetsList.PNG) |

## Development

- **Framework**: Next.js with TypeScript
- **UI Development**: DaisyUI
- **Database**: MongoDB with Mongoose
- **Authentication**: next-auth@beta15

## Project Features:

MyPet offers a comprehensive set of features designed to streamline animal adoption processes and enhance user experience.

### User-Friendly Interface
- Intuitive design ensures ease of use for all users.

### Full-Stack Framework
- Developed with Next.js and TypeScript for efficient full-stack development.

### Modern UI Development
- Utilizes DaisyUI for visually appealing and modern user interface design.

### Secure Authentication
- Implements next-auth@beta15 for robust and secure user authentication.

### Role-Based Authorization
- Supports role-based access control for administrators, moderators, and users.

### Dashboard Functionality
- Provides a centralized dashboard for users to manage profiles, adoption requests, and settings.

### Pet Management
- Moderators can add, edit, and delete pet listings efficiently.

### Adoption Request Management
- Moderators can handle adoption requests, including approval, rejection, and pending status.

### Global Notifications
- Moderator Control Panel enables the creation and management of global notifications and announcements.

### Admin Privileges
- Administrators have additional privileges for user management tasks.

### Theme Modes
- Offers light and dark theme modes for user interface customization.

### Error Handling
- Features robust error handling mechanisms for smooth user experience.

### Customization
- Allows organizations to customize the platform to fit their specific needs.

### Scalability
- Designed to scale with the growth of adoption organizations and user base.

### Open Source
- MyPet is open-source, allowing for community contributions and customization.



## Routes

#### Guest Access:
- `example.com/`: Accessible by guests. Guests can browse available pets and adoption information.
- `example.com/login`: Login page
- `example.com/register`: Registration page
   
#### User Dashboard:
- `example.com/dashboard`: Requires account registration/login. Authenticated users can access their profile, update settings, and manage adoption requests.
  - `example.com/dashboard/profile`: Display user profile
  - `example.com/dashboard/settings`: Update user settings
  - `example.com/dashboard/myrequests`: Display and manage adoption requests
  - `example.com/dashboard/petslist`: Display list of available pets

### Moderator Authorization

#### Pet Management:
- `example.com/dashboard/pets`: List of pets to manage
- `example.com/dashboard/pets/add`: Add a new pet
- `example.com/dashboard/pets/[id]`: Update pet information
  
#### Adoption Request Management:
- `example.com/dashboard/managerequests`: Manage users' adoption requests. Moderators can approve/decline or set requests to pending.

#### Moderator Control Panel (ModCP):
- `example.com/dashboard/modcp`: Create/update/delete global notifications or announcements
  
### Admin Authorization

#### User Management:
- `example.com/dashboard/users`: List of users to manage
- `example.com/dashboard/users/add`: Add a new user
- `example.com/dashboard/update/[id]`: Update user information
  
### Functions

- **Actions Functions**:
  - `app/lib/actions.js`: Contains actions functions.
  
- **Fetching Functions**:
  - `app/lib/data.js`: Contains fetching functions.
  
- **Model Functions**:
  - `app/lib/model.js`: Contains model functions.
  
- **Utility Functions**:
  - `app/lib/utils.js`: Contains Mongoose connection utilities.


## Setup


 1. Clone the repository:

 ```bash
 git clone https://github.com/mydevify/MyPet.git
 ```

2. Navigate to the frontend directory:

 ```bash
 cd frontend
 ```

3. Install dependencies:

 ```bash
 npm install
 ```

4. Create a `.env` file inside the frontend root directory and paste the following configuration:

 ```dotenv
 MONGO=<your_MongoDB_connection_link>
 AUTH_SECRET=xloyistestingbeta
 AUTH_URL=http://localhost:3000/
 REACT_EDITOR=atom
 API_BASE_URL=http://localhost:3000/
 ```

 Replace `<your_MongoDB_connection_link>` with the connection link obtained from your MongoDB account.

5. Save the `.env` file.

### MongoDB Setup

1. Create an account on [MongoDB](https://www.mongodb.com/).
2. Create a new cluster.
3. Copy the connection link to the `MONGO` variable in the `.env` file.

### Usage

Once the setup is complete, you can start the development server:

```bash
npm run dev
```

You Can import the data i provided you in the repository root

Login:
Username: admin
password: admin
   
## Authors

- [@xLoy]()
