# This is an amazing app for retrieving your favorite hero using marvel api.

## Technologies:

- React Native
- React Navigation
- Typescript
- Jest and Testing Library

## Getting Started

## Branches:

#### It was created 5 Branches:
- **main**: It is used for production only. After it is decided to create a release, other branches can be merged to it.
- **development**: This is the main branch used for development. All of the features developed in other branches have Pull Requests created to this one.
- **feature/MARVEL-on-boarding**: Branch created to add features related to on boarding screen.
- **feature/MARVEL-hero-comics**: Branch created to add features related to listing comics for a particular hero.
- **feature/MARVEL-comic-detail**: Branch created to add features related to showing comic detail, like cover, issue number, pub date and so on.

## Project Structure:

#### The project has the following folders:
- **assets**: Where images used in the project are located.
- **src**: The main folder where other folders are.
- **api**: Here is the place where we import axios and pass the parameters so we can call the Marvel API.
  - **index.ts**: Retrieves axios.
  - **urls.ts**: This file we keep urls for the end points of Marvel API.
- **components**: Folder to export some components there are being used in the project, these components are:
  - **ComicCard**:  A card component to render the content of a Comic (cover, name...).
  - **HeroCard**: Card component to render hero content like (thumbnail, title). It is used on the FavoriteHero screen.
  - **Input**: TextInput where user types his favorite hero initials.
- **constants**: This is where is kept majority of the project's constants.
  - **api.ts**: File to keep the credentials to access Marvel API. NOTE: This is not a good practice. I explain better in Considerations section
  - **colors.ts**: Some colors that are used throughout the project.
  - **fonts.ts**: Font that is used in all of the text components.
  - **images.ts**: File where we export images for the onBoarding screen, and enums for diferent Image Sizes(you can find the sizes in Marvels Documentation).
- **helpers**: Folder to retrieve a helper for getting imageUris from the database.
- **hooks**: Custom hooks used in the screens.
  - **useComics**: Hook to request comics for a particular hero. Used in the HeroComics screen.
  - **useHero**: Hook to fetch heroes with heroInitials typed by the used.
- **providers**: Folder to keep the Hero provider. A context using React's ContextAPI to pass in heroes for the components
- **router**: This is where we keep the main Stack Navigator, and Screens are defined.
- **screens**: It is where we keep the code for the screens.
  - **ComicDetail**: Screen to detail important information for a particular hero comic. 
  - **HeroComics**: Screen to list all of available comics for user's favorite hero.
  - **OnBoarding**: There are two componets on this screen:
    - **FavoriteHero**: It is where the user types favorite hero initials and sees the list of heroes with those initials.
    - **Presentation**: On Boarding screen to display information about the application.
- **types**: It is where it's defined interfaces and types used in the application.
- **wrappers**: Components to remove complex logic from screen components.  
  - **ComicListWrapper**: Component retrieves an ActivityIndicator or Children depending on loadingComics state.
  - **HeroListWrapper** Component retrieves activity indicator if loadingHeroes is true

## Considerations:

#### State Management: 

  The application is small, so I saw no reason to use libraries like redux, mobX. It seemed to me that, Context API (to avoid prop drilling and to share state through different components) and local component state surficed for the purpose of this test.

#### Hard Coded PrivateKEY:

  This is definitely not a good practice. Usually I work using NodeENV or other libraries like that, which create enviroment varibles to keep confidential data. Howhever, since one of the requirements for the test was an easy way to run the application, it seemed to me appropriate to left it there and give the consideration, to make easy to run the test. But, stating here that this is not the way to do development and production environments, and this is a serious issue on large applications.
