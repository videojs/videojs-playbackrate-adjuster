# videojs-playbackrate-adjuster

[![Greenkeeper badge](https://badges.greenkeeper.io/videojs/videojs-playbackrate-adjuster.svg)](https://greenkeeper.io/)

A Video.js 6 middleware that adjusts controls based on playback rate

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
