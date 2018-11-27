# videojs-playbackrate-adjuster

A Video.js 7 middleware that adjusts controls based on playback rate

When the playback rate is adjusted in from the menu, the middleware tells the player that the duration and times have changes and then uses the current playback rate to adjust the times in the control bar.
For example, when the player is playing back in 2x, a 20 minute video will look like a 10 minute video.

## Installation

```sh
npm install --save videojs-playbackrate-adjuster
```

## Usage

To include videojs-playbackrate-adjuster on your website or web application, use any of the following methods.
Since it's a middleware and attaches itself to Video.js automatically,
it only needs to be included or required.

### `<script>` Tag

This is the simplest case. Get the script in whatever way you prefer and include the plugin _after_ you include [video.js][videojs], so that the `videojs` global is available.

```html
<script src="//path/to/video.min.js"></script>
<script src="//path/to/videojs-playbackrate-adjuster.min.js"></script>
<script>
  var player = videojs('my-video');
</script>
```

### Browserify

When using with Browserify, install videojs-playbackrate-adjuster via npm and `require` the plugin as you would any other module.

```js
var videojs = require('video.js');

// The actual middleware function is exported by this module, but it is also
// attached to Video.js; so, there is no need to assign it to a variable.
require('videojs-playbackrate-adjuster');

var player = videojs('my-video');
```

### RequireJS/AMD

When using with RequireJS (or another AMD library), get the script in whatever way you prefer and `require` the plugin as you normally would:

```js
require(['video.js', 'videojs-playbackrate-adjuster'], function(videojs) {
  var player = videojs('my-video');
});
```

## License

MIT. Copyright (c) Gary Katsevman <me@gkatsev.com>


[videojs]: http://videojs.com/
