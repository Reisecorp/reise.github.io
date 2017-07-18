Here are a few instructions to make small changes to the site:

## GitHub Desktop

Since the site is hosted on Github, the easiest way to interact with it is via the GitHub Desktop application. Once you've installed the application, sign into it with the reisecorp account. You can find the required help [here](https://help.github.com/desktop/guides/getting-started/).

Once you've signed in, the next thing to do is to clone the reisecorp.github.io repository. [This](https://help.github.com/desktop/guides/contributing/) link will have instructions on how to do this. Once the repo has been cloned you will have all the files on your computer so you can make changes. 

## Adding Destinations

Destinations are organized by category. If a destination occurs in two categories, two files have to be created. 

1. Choose the folder pertaining to the relevant category. 

2. In that folder, create a file with the name of the place in kebab-case ( hyphens instead of spaces ) and the extension '.md' . This is a markdown file. Eg: kolkata.md 

3. This file needs header information in a specific format between two lines of three hyphens which must be at the top of the document. See similar files for reference. layout should be set to destination, title should be the name of the place. image should be set to the filename of the image. The corresponding image should be placed in /static/img/destinations.

## Adding Categories

Categories are listed in the _config.yml file. To add a new category. 

1. Add the category name, again in kebab case, to the categories list in _config.yml. Use the other entries as format reference. 

2. The path and output options should be the same as all other categories. The image option is the filename of the image for the category page. This image should be placed in static/img/categories

3. Make a new folder in the root directory with the kebab-case name of the category prefixed with an underscore. 

4. Inside this folder create a file called index.html

5. index.html should have a header as in the other categories. layout should be destinations-category. Title and tagline as necessary. Permalink should be set to /destinations/(Category name in kebab case)/

## Changing Gallery Photos

The gallery collects photos automatically from the /static/img/gallery folder. Changing images in the folder will change the images displayed in the gallery.

Similarly for the three columns on Why Us page, the images are stored in /static/img/why-us/(column). Change the images in the relevant subdirectory. 


