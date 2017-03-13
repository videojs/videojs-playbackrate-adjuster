# videojs-playbackrate-adjuster

A Video.js 6 middleware that adjusts controls based on playback rate

## Installation

```sh
npm install --save videojs-playbackrate-adjuster
```

## Usage

To include videojs-playbackrate-adjuster on your website or web application, use any of the following methods.

### `<script>` Tag

This is the simplest case. Get the script in whatever way you prefer and include the plugin _after_ you include [video.js][videojs], so that the `videojs` global is available.

```html
<script src="//path/to/video.min.js"></script>
<script src="//path/to/videojs-playbackrate-adjuster.min.js"></script>
<script>
  var player = videojs('my-video');

  player.playbackrateAdjuster();
</script>
```

### Browserify

When using with Browserify, install videojs-playbackrate-adjuster via npm and `require` the plugin as you would any other module.

```js
var videojs = require('video.js');

// The actual plugin function is exported by this module, but it is also
// attached to the `Player.prototype`; so, there is no need to assign it
// to a variable.
require('videojs-playbackrate-adjuster');

var player = videojs('my-video');

player.playbackrateAdjuster();
```

### RequireJS/AMD

When using with RequireJS (or another AMD library), get the script in whatever way you prefer and `require` the plugin as you normally would:

```js
require(['video.js', 'videojs-playbackrate-adjuster'], function(videojs) {
  var player = videojs('my-video');

  player.playbackrateAdjuster();
});
```

## License

MIT. Copyright (c) Gary Katsevman &lt;me@gkatsev.com&gt;


[videojs]: http://videojs.com/
