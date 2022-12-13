var video = document.getElementById('video');
var player = dashjs.MediaPlayer().create()
var url = 'https://surajlivevideostreaming-usea.streaming.media.azure.net/911bcc03-d573-4668-9afc-786901a2f417/75a2ad92-e431-4bda-b72f-45bf00c90c67.ism/manifest(format=m3u8-cmaf)'
player.initialize(video, url, true)