---
title: Youtube Archival
tags:
 - guide
---
# Youtube Archival

Youtube is slowly (but surely) phasing out it’it's support for custom subtitle in their videos, so it’s best to start archiving videos with notable subtitle work, either fan-created/supported or not. Or in general! You never know when one video will be delisted, or even the uploader banned, from youtube or not. I already have my own share of regrets in the past, and now trying not to make the same mistake. Always archive those that you think is worth saving.

You’ll need `yt-dlp` ([link](https://github.com/yt-dlp/yt-dlp)), `ytsubconverter` ([link](https://github.com/arcusmaximus/YTSubConverter)), and `ffmpeg` (you should have this already as one of `yt-dlp`’s dependencies), though honestly any kind of software that lets you insert softsubs to a video file will work. The first is to download video and subtitle from youtube, second is to convert said subtitle format so that it can be read by your media player, and the third as a way to insert the converted subtitle file into the downloaded video file. 

First, the command for `yt-dlp`:

```bash
yt-dlp -f "bv*+ba" --write-subs --sub-langs en --sub-format srv3 --merge-output-format mkv {youtube-url} -o '%(uploader)s - %(title)s.%(ext)s'
```

> [!note]- Command breakdown
> - `-f "bv*+ba"`: format flag, download best video possible and if it doesn’t have audio stream, download best audio possible as well and merge.
> - `--write-subs --sub-langs en --sub-format srv3`: write available subtitle into a file, selecting subs with `en` language code with `srv3` format.
> 	- You might need to check what subtitle is available on which language code with `yt-dlp --list-subs {youtube-url}`, disregarding automatic captions.
> - `--merge-output-format mkv`: write the downloaded stream into matroska (.mkv) format - available formats for yt-dlp are avi, flv, mkv, mov, mp4, webm, but use either mp4 or mkv unless you’re weird like that).
> - `-o '%(uploader)s - %(title)s.%(ext)s'`: use {uploader name} - {youtube title}.{format extension} as output name. Using either `‘’` or `""` is fine.
> 	- If you want to test your own `-o` template, use this command and it will output what would be your filename:
> 		```bash
> 		yt-dlp --print filename -o "{test string}" {youtube url}
> 		```

This downloads video with `yt-dlp` with highest video and audio quality possible alongside .srv3 (youtube’s proprietary custom subtitle). I personally use .mkv for the container just because I prefer it, but .mp4 is also supported — it’s also the source format used by youtube for video stream; As a note, youtube uses .opus for audio stream, but the condition of having best video format without audio data is very unlikely and most of the time the .mp4 file should have the best audio stream as well.

Next will be to convert the downloaded .srv3 to more common subtitle file format:

```bash
ytsubconverter input.srv3 --visual output.ass
```

This reverse-converts previous .srv3 subtitle to .ass with `ytsubconverter` with the subtitle styling applied (using `--visual` flag). srt subtitle format doesn’t support subtitle styling, though `ytsubconverter` supports converting from .sbv, the subtitle format you get when downloading subtitle from youtube subtitle editor, to .srt so you can edit it with aegisub.

Then, to merge the subtitle file into video:

```bash
ffmpeg -i input.mkv -f ass -i input.ass -map 0:0 -map 1:0 -c:v copy -c:a copy -c:s ass output.mkv
```

>[!note]- Command breakdown
> - `-i input.mkv`: first input file to be video file ***(order is important for mapping later!)***
> - `-f ass -i input.ass`: second input file to be subtitle file, declared as .ass format subtitle file ***(order is important for mapping later!)***
> - `-map 0:0 -map 1:0`: mapping data stream from 2 inputs (labeled 0, the video file, and 1, the subtitle file) to output file (labeled 0, the final output file). *this is optional if you only tries to insert one soft subtitle because ffmpeg will automatically sorts out stream mapping if you omit `-map` flag from the command.*
> 	- This doesn’t matter that much if you’re only using one input file per media type, but will be important if you want to have two different subtitle, for example, since you’ll just overwrite one subtitle stream with the other if you didn’t map the data stream properly. ***this is not necesarrily the best way to use this flag from me, will update once I understand more about this*** - reading [this example from ffmpeg’s docs](https://ffmpeg.org/ffmpeg.html#toc-Examples) is highly suggested if you want to learn more about this.
> - `-c:v copy -c:a copy -c:s ass`: tells ffmpeg to just copy video and audio stream instead of transcoding them, and transcode subtitle stream with `ass` encoder.
> - `output.mkv`: output file name.

This will create a video file with softcoded subtitle embedded (as opposed of hardcoded, embedded directly into the video stream) with matroska (.mkv) format, with blazing speed since we’re just copying input data stream rather than transcoding them into new data format.

This is good for archival & preservation sake, since we didn’t do any tampering to the original video (and audio) file, and adding subtitle that can be turned on and off in convenient manner for most video player, without the need of having both video and subtitle file in the same directory.