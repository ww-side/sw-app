# Test task for Starnavi

Video presentation - https://www.loom.com/share/ba8bb7d5fd5446bf9074fc498f4f489b?sid=3a1a4f4a-ef3a-48cc-b8c2-b3881264f47c  
Production link - https://sw-app-ten.vercel.app/

When we start the project, we go to the main page and see a list of characters from the API https://sw-api.starnavi.io/. Clicking on the icon will take us to the graph with the selected character without reloading the page.

## Before start
Add ``.env.local`` file in root of project and set ``SERVER_URL=https://sw-api.starnavi.io``

## Get start
1. ``git clone https://github.com/ww-side/sw-app/``  
2. ``yarn``
3. ``yarn start``

## Start tests
``yarn test``  
If the tests have not started, but a text window appears in the console, press "a"