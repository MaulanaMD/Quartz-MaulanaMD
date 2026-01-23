---
title: Youtube Archival
tags:
 - guide
---
# Youtube Archival

Youtube is slowly (but surely) phasing out it’it's support for custom subtitle in their videos, so it’s best to start archiving videos with notable subtitle work, either fan-created/supported or not. Or in general! You never know when one video will be delisted, or even the uploader banned, from youtube or not. I already have my own share of regrets in the past, and now trying not to make the same mistake. Always archive those that you think is worth saving.

You’ll need `yt-dlp` ([link](https://github.com/yt-dlp/yt-dlp)) and `ytsubconverter` ([link](https://github.com/arcusmaximus/YTSubConverter)). The former to download video and subtitle from youtube, the latter is to convert said subtitle format so that it can be read by your media player. 

`yt-dlp -f "bv*+ba" --write-subs --sub-langs en --sub-format srv3 --merge-output-format mkv {youtube-url} -o '%(title)s.%(ext)s`

This downloads video with `yt-dlp` with highest video and audio quality possible alongside .srv3 (youtube’s proprietary custom subtitle). I personally use .mkv for the container just because I prefer it, but .mp4 is also supported — it’s also the source format used by youtube for video stream; As a note, youtube uses .opus for audio stream, but the condition of having best video format without audio data is very unlikely and most of the time the .mp4 file should have the best audio stream as well.

`ytsubconverter input.srv3 --visual output.ass`

This reverse-converts previous .srv3 subtitle to .ass or .srt with `ytsubconverter` with the subtitle styling applied — better to have language written in the filename (e.g. filename.en.ass) for the video player to be able to read the subtitle.

It’s better for the subtitle file not to be embedded for archival purpose (not tampering the video file as much as possible), but for me, I haven’t figured out how to use ffmpeg to embed .ass file yet.