# Image-scroller

Uses https://picsum.photos/v2/list?page=2&limit=100 API to go through list, page by page.
Could probably use public feed photos from flickr to work too (couldnt access other things that required auth with key as it kept returning a fail when trying to get url) , also didnt know, that it needed node-fetch to see info in terminal until after it was done with picsum.

Limited with for loop to 3 pages at the start of the index.js

Uses the list info to create and display img with url from it, by creating div with img in it.

Since there are no img names/titles in retrieved list, displayed author name instead.

For better easier work with layout used bootstrap.
