# Assingment 1

Date Created: 30 May 2023
Last Modification Date: 30 May 2023
Assignment URL: <https://git.cs.dal.ca/parshva/csci_5709_assignments/-/tree/main/Assignment1>
Gitlab URL:
<https://git.cs.dal.ca/parshva/csci_5709_assignments>
Deployment URL:
<https://64751d9f6b5fe267ee931af9--glistening-lokum-2bb6a2.netlify.app/>

## Authors

Parshva Shah (<pr371441@dal.ca>)


## Testing

For the testing of the assignment, I started the webapp in my local machine then when everything was working fine, I tested it on the browser while deploying it on Netlify.

## Deployment

1. First of all, I Cloned my `CSCI_5709_Assingments` repository to my local machine.
2. Then, I created a new project with the following command in [React](https://react.dev) using `npx create-react-app user-management` command.
4. Afterwards, I pushed my user-management project to my GitHub account repository.
5. I deployed my app on [Netlify](https://www.netlify.com).
6. I modified the changes in the app for functionality and pushed the changes to the github repository.
7. I created a `README.md` file and pushed it to the gitlab repository.


## Built With

* [React](https://react.dev) - The web framework used
* [Netlify](https://app.netlify.com/) - Hosting platform used



---

## Sources Used

I used the below sources for implementing the code for my navigation bar in Assignment-1.

### 1. main.css

*Lines 1-95*

```
@import url("https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;400;700&display=swap");

* {
	
	padding: 0;
	margin: 0;
	box-sizing: border-box;
	font-family: "cursive", cursive;
}

:root {
	--secondaryColor: rgb(0, 195, 255);
	--textColor: #eee;
}

header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 60px;
	padding: 0 2rem;
	background-color: Black;
	color: var(--textColor);
}

nav a {
	margin: 0 1rem;
	color: var(--textColor);
	text-decoration: none;
}

nav a:hover {
	color: var(--secondaryColor);
}

.logo{
	color: #eee;
	font-family: cursive;
}

header .nav-btn {
	padding: 5px;
	cursor: pointer;
	background: transparent;
	border: none;
	outline: none;
	color: var(--textColor);
	visibility: hidden;
	opacity: 0;
	font-size: 1.8rem;
}

header div,
nav {
	display: flex;
	align-items: center;
	height: 50px;
}

@media only screen and (max-width: 1024px) {
	header .nav-btn {
		visibility: visible;
		opacity: 1;
	}

	header nav {
		position: fixed;
		top: -100vh;
		left: 0;
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1.5rem;
		background-color: black;
		transition: 1s;
	}

	header .responsive_nav {
		transform: translateY(100vh);
        z-index: 1;
	}

	nav .nav-close-btn {
		position: absolute;
		top: 2rem;
		right: 2rem;
	}

	nav a {
		font-size: 1.5rem;
	}
}
```

The code above was created by adapting the code from [Index-Zero-0](https://github.com/Index-Zero-0/Responsive-navbar-ReactJS) as shown below: 

```
@import url("https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;400;700&display=swap");

* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
	font-family: "Titillium Web", sans-serif;
}

:root {
	--mainColor: #29335c;
	--mainColorLight: #5767aa;
	--secondaryColor: #db2b39;
	--textColor: #eee;
}

header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 80px;
	padding: 0 2rem;
	background-color: var(--mainColor);
	color: var(--textColor);
}

nav a {
	margin: 0 1rem;
	color: var(--textColor);
	text-decoration: none;
}

nav a:hover {
	color: var(--secondaryColor);
}

header .nav-btn {
	padding: 5px;
	cursor: pointer;
	background: transparent;
	border: none;
	outline: none;
	color: var(--textColor);
	visibility: hidden;
	opacity: 0;
	font-size: 1.8rem;
}

header div,
nav {
	display: flex;
	align-items: center;
}

@media only screen and (max-width: 1024px) {
	header .nav-btn {
		visibility: visible;
		opacity: 1;
	}

	header nav {
		position: fixed;
		top: -100vh;
		left: 0;
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1.5rem;
		background-color: var(--mainColor);
		transition: 1s;
	}

	header .responsive_nav {
		transform: translateY(100vh);
	}

	nav .nav-close-btn {
		position: absolute;
		top: 2rem;
		right: 2rem;
	}

	nav a {
		font-size: 1.5rem;
	}
}

```

- The code was implemented by me for creating the navigation bar for my assignment-1 in CSCI-5709. I was going through the internet for how to create a navigation bar in react framework and applying enhanced animation effect on it. Then, I found this git repository tutorial where the navigation bar was created in react. Here, the syling applied is quite enhancing, so i took reference of [Index-Zero-0](https://github.com/Index-Zero-0/Responsive-navbar-ReactJS) for applying css to it and then modified on top of it. 
- The given [Index-Zero-0](https://github.com/Index-Zero-0/Responsive-navbar-ReactJS)'s Code was used because it is visually appealing for the navigation bar and it is available on open source platform in a github repository which is publicaly available.
- The [Index-Zero-0](https://github.com/Index-Zero-0/Responsive-navbar-ReactJS)'s Code was modified by me while I applied css to my navigation bar and updated font style, color combination and then updated some minor snippets to make it more responsive.

*Repeat as needed*

### Navigation.js

*Lines 8-38*

```

function Navigation() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3 ><a className="logo" href="/#">Logo
	  </a></h3>
      <nav  ref={navRef}>
        <a href="/#">Home</a>
        <a href="/#">Search<CgSearch/></a>
        <a href="/#">Wish-list <VscHeart sx={{innerHeight:"5px"}}/>
</a>
        <a href="/user-profile">
          User Profile <CgProfile/>
        </a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navigation;


```

The code above was created by adapting the code in [NAME](link) as shown below: 

```


function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<h3>LOGO</h3>
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/#">My work</a>
				<a href="/#">Blog</a>
				<a href="/#">About me</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;

```

- The code was implemented by me for creating the navigation bar for my assignment-1 in CSCI-5709. I was going through the internet for how to create a navigation bar in react framework and applying enhanced animation effect on it. Then, I found this git repository tutorial where the navigation bar was created in react and it was also responsive at the same time. So, I took reference of [Index-Zero-0](https://github.com/Index-Zero-0/Responsive-navbar-ReactJS) for creating the base of it and then modified on top of it.
- The given [Index-Zero-0](https://github.com/Index-Zero-0/Responsive-navbar-ReactJS)'s Code was used because it is visually appealing for the navigation bar, responsive and it is available on open source platform in a github repository which is publicaly available.
- The [Index-Zero-0](https://github.com/Index-Zero-0/Responsive-navbar-ReactJS)'s Code was modified by me while I added different icons to my navigation bar according to the page name specified and updated the styling of the logo. Moreover, I also applied  minor snippet changes such as adding z-index for responsiveness and to make it more responsive.


## Acknowledgments

Icons are usedd from React Icons library:
<https://react-icons.github.io/react-icons/>

### References

[1] “React Icons,” Github.io, 2023. [Online]. Available: https://react-icons.github.io/react-icons/search?q=profile. [Accessed: May 30, 2023]
‌

‌[2] Index-Zero-0, “Responsive-navbar-ReactJS/Navbar.js at main · Index-Zero-0/Responsive-navbar-ReactJS,” GitHub, 2022. [Online]. Available: https://github.com/Index-Zero-0/Responsive-navbar-ReactJS/blob/main/src/Components/Navbar.js. [Accessed: May 30, 2023]
‌
[3] Index-Zero, “Responsive Navbar Tutorial In React JS,” YouTube. Feb. 23, 2022 [Online]. Available: https://www.youtube.com/watch?v=amf18mxNX18&t=758s. [Accessed: May 30, 2023]
‌
[4] Indian Coders, “Design Modern Responsive Login & Signup Form With Material UI And React | Material UI Project,” YouTube. Jul. 11, 2022 [Online]. Available: https://www.youtube.com/watch?v=ZSBZ4QrfETM&t=1035s. [Accessed: May 30, 2023]
‌

[5]  “MUI: The React component library you always wanted,” Mui.com, 2023. [Online]. Available: https://mui.com/. [Accessed: May 30, 2023]
‌

