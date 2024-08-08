import ffmpeg from 'fluent-ffmpeg'
import ffmpegPath from 'ffmpeg-static'

// 指定 ffmpeg 的路径
ffmpeg.setFfmpegPath(ffmpegPath);

// 定义输入和输出文件路径
const inputFile = '/Users/hsiehchenglun/Movies/2024-07-30\ 14-00-18.mov';
const outputFile = '/Users/hsiehchenglun/Movies/2024-07-30\ 14-00-18.mp4';

// 执行转换
ffmpeg(inputFile)
  .output(outputFile)
  .on('start', function(commandLine) {
    console.log('执行的命令: ' + commandLine);
  })
  .on('progress', function(progress) {
    console.log(progress);
  })
  .on('end', function() {
    console.log('转换成功!');
  })
  .on('error', function(err) {
    console.error('转换过程中发生错误: ' + err.message);
  })
  .run();
