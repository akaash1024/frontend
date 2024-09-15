Another great way is placeholder images or https://placehold.co/ 

https://placehold.co/
```
https://via.placeholder.com/200,
https://via.placeholder.com/400,
https://via.placeholder.com/600,
https://via.placeholder.com/800,
https://via.placeholder.com/1000
```
Responsive Images
- `srcset`: This attribute is like having different sized posters for different walls. You can tell the browser which image to use depending on the screen size.
```
<img src="img-small.jpg" srcset="img-medium.jpg 500w, img-large.jpg 1000w" alt="A responsive image that changes size">
```
- This tells the browser to use img-medium.jpg on screens up to 500 pixels wide and img-large.jpg on screens wider than that. The w stands for "width" in pixels.

- `sizes`: This attribute works with srcset to give more specific instructions. It's like telling someone which poster to hang based on how big the wall is.
```
<img src="img-small.jpg" srcset="img-medium.jpg 500w, img-large.jpg 1000w" sizes="(max-width: 600px) 500px, 1000px" alt="A responsive image with sizes">
```
##

The `</picture>` Tag
```
<picture>
  <source srcset="img-extrawide.jpg" media="(min-width: 1200px)">
  <source srcset="img-wide.jpg" media="(min-width: 800px)">
  <img src="img-square.jpg" alt="A picture that changes based on screen size">
</picture>
```
-   This setup displays `img-extrawide.jpg` on very wide screens, `img-wide.jpg` on medium screens, and defaults to `img-square.jpg` on smaller screens.

Remember, images are not just decoration; they can convey important information and emotions. So choosing the right image and making sure it displays well on all devices is key to creating a great webpage. Happy coding!

####

<h1>Audio & Video</h1>

## `<audio>`

The `<audio>` element is used to embed sound content in documents.

### Attributes:

- **src**: The URL of the audio to embed.
- **controls**: If present, the browser will offer playback controls.
- **autoplay**: The audio will start playing as soon as it's ready.
- **loop**: The audio will start over again every time it finishes.
- **muted**: Specifies that the audio output should be muted.
- **preload**: Hints to the browser about how the audio should be loaded when the page loads (`none`, `metadata`, or `auto`).
```
<audio controls>
  <source src="sound.mp3" type="audio/mpeg">
  <source src="sound.ogg" type="audio/ogg">
  Your browser does not support the audio element.
</audio>
```

####

<h1>Video</h1>

## `<video>`

The `<video>` element is used to embed video content

### Attributes: (most are similar to `audio`):

- **src**: The URL of the audio to embed.
- **controls**: If present, the browser will offer playback controls.
- **autoplay**: The audio will start playing as soon as it's ready.
- **loop**: The audio will start over again every time it finishes.
- **muted**: Specifies that the audio output should be muted.
- **preload**: Hints to the browser about how the audio should be loaded when the page loads (`none`, `metadata`, or `auto`).
- **poster**: An image to show as a placeholder before the video plays.
- **width** and **height**: Set the size of the video player.
```
<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
  Your browser does not support the video tag.
</video>

```
