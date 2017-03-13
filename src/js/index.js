import videojs from 'video.js';

const createNewRanges = (timeRanges, playbackRate) => {
  const newRanges = [];

  for (let i = 0; i < timeRanges.length; i++) {
    newRanges.push([
      timeRanges.start(i) / playbackRate,
      timeRanges.end(i) / playbackRate]);
  }

  return videojs.createTimeRange(newRanges);
};

const playbackrateAdjuster = function(player) {
  let tech;

  player.on('ratechange', function() {
    tech.trigger('durationchange');
    tech.trigger('timeupdate');
  });

  return {
    setSource(srcObj, next) {
      next(null, srcObj);
    },

    setTech(newTech) {
      tech = newTech;
    },

    duration(dur) {
      return dur / player.playbackRate();
    },

    currentTime(ct) {
      return ct / player.playbackRate();
    },

    setCurrentTime(ct) {
      return ct * player.playbackRate();
    },

    buffered(bf) {
      return createNewRanges(bf, player.playbackRate());
    },

    seekable(seekable) {
      return createNewRanges(seekable, player.playbackRate());
    },

    played(played) {
      return createNewRanges(played, player.playbackRate());
    }

  };
};

// Register the plugin with video.js.
videojs.use('*', playbackrateAdjuster);

// Include the version number.
playbackrateAdjuster.VERSION = '__VERSION__';

export default playbackrateAdjuster;
