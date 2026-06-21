// ================== API 配置 ==================
const OLD_SEARCH_API = 'http://kuwo.bfmzdx.cn/kuwo/search/searchMusicBykeyWord';
const OLD_PLAY_API   = 'http://kuwo.bfmzdx.cn/kuwo/url';
const KUGOU_SEARCH_API = 'http://mobilecdn.kugou.com/api/v3/search/song?format=json';

// ================== 主页模板（桌面版）==================
const HOME_PAGE_HTML = `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head><meta charset=utf-8><title>Prism Music Search - For Old Devices</title>
<style>
body{background:#FFF;color:#000;font-family:SimSun,Arial;font-size:14px;margin:0;padding:20px}
.container{max-width:800px;margin:0 auto;background:#FFF;padding:20px;border:1px solid #CCC}
h1{color:#000;font-size:24px;margin-top:0;border-left:4px solid #888;padding-left:15px}
.sub{color:#666;margin-bottom:30px}
.search-box{background:#F5F5F5;padding:20px;text-align:center;border:1px solid #DDD}
input.txt{width:70%;padding:8px;font-size:16px;border:1px solid #999}
input.btn{padding:8px 16px;font-size:16px;background:#EEE;border:1px solid #888;cursor:pointer}
.footer{margin-top:30px;font-size:12px;color:#999;text-align:center}
a{color:#0066CC}
.update-log{background:#FFFDE7;border-left:3px solid #BDB76B;padding:5px 10px;margin-top:20px;font-size:11px;text-align:left}
</style>
</head>
<body>
<div class="container">
  <h1>Prism Music Search / 音乐搜索</h1>
  <div class="sub">Search songs, get album info and play links / 搜索歌曲，获取专辑信息和播放链接</div>
  <div class="search-box">
    <form method="GET" action="/">
      <input type="text" name="q" class="txt" placeholder="Song or artist / 歌曲或歌手" value="{query}">
      <input type="submit" class="btn" value="Search / 搜索">
    </form>
  </div>
  <div class="update-log">
    <strong>Update / 更新</strong> (2026-05-24): Use dual API to support album name and duration / 使用双API，支持专辑名和时长
  </div>
  <div class="footer">
    <a href="?mobile=1">Mobile Version / 移动版</a> | 
    <a href="http://672.w0.am">老设备兼容站点</a> | 
    <a href="https://antipa.cn">2025 antipa.cn</a> | 
    2026 qwq672.top 重制 | No JavaScript
  </div>
</div>
</body>
</html>`;

// ================== 主页移动版模板 ==================
const HOME_MOBILE_HTML = `<!DOCTYPE html>
<html>
<head><meta charset=utf-8><meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes"><title>Prism Music Search</title>
<style>
body{background:#F0F0F0; font-family:Helvetica, Arial, sans-serif; margin:0; padding:20px}
.container{background:#FFF; padding:20px; border:1px solid #CCC}
h1{font-size:22px; margin-top:0}
.sub{color:#666; margin-bottom:20px}
input.txt{width:100%; padding:12px; font-size:16px; margin-bottom:12px; border:1px solid #999; box-sizing:border-box}
input.btn{width:100%; padding:12px; font-size:18px; background:#EEE; border:1px solid #888}
.footer{margin-top:20px; font-size:12px; text-align:center}
.update-log{background:#FFFDE7; border-left:3px solid #BDB76B; padding:5px 10px; margin-top:15px; font-size:11px}
</style>
</head>
<body>
<div class="container">
  <h1>Prism Music Search / 音乐搜索</h1>
  <div class="sub">Search songs, get album info and play links / 搜索歌曲，获取专辑信息和播放链接</div>
  <form method="GET" action="/">
    <input type="hidden" name="mobile" value="1">
    <input type="text" name="q" class="txt" placeholder="Song or artist / 歌曲或歌手" value="{query}">
    <input type="submit" class="btn" value="Search / 搜索">
  </form>
  <div class="update-log">
    <strong>Update / 更新</strong> (2026-05-24): Dual API / 双API - album & duration
  </div>
  <div class="footer">
    <a href="?mobile=0">Desktop Version / 桌面版</a> | <a href="http://672.w0.am">老设备兼容站点</a> | 2025 antipa.cn | 2026 qwq672.top 重制
  </div>
</div>
</body>
</html>`;

// ================== 搜索结果页模板（桌面版）==================
const RESULTS_FULL_HTML = `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head><meta charset=utf-8><title>Prism Music Search - Results</title>
<style>
body{background:#FFF;color:#000;font-family:SimSun,Arial;font-size:14px;margin:10px}
h1{background:#DDD;color:#000;padding:8px;text-align:center;font-size:16px;margin:0;border-bottom:1px solid #999}
.search{background:#F5F5F5;padding:10px;margin-bottom:10px;border:1px solid #CCC}
.search-row{text-align:center}
input.txt{width:60%;padding:5px;border:1px solid #888;background:#FFF}
input.btn{padding:3px 10px;background:#EEE;border:1px solid #888;color:#000}
table{width:100%;border-collapse:collapse;margin-top:6px}
th,td{padding:8px 5px;border-bottom:1px dotted #CCC;vertical-align:top;text-align:left}
th{background:#EFEFEF}
.cover-cell{width:60px;text-align:center;vertical-align:middle}
.cover-img{width:48px;height:48px;border:1px solid #DDD}
.song-name{font-weight:bold}
.singer{font-size:12px;color:#666;margin:2px 0}
.album{font-size:12px;color:#444;margin:2px 0}
.duration{font-size:11px;color:#888;margin:2px 0}
.actions{margin-top:5px}
.actions a{margin-right:12px;color:#060}
.footer{margin-top:20px;font-size:12px;color:#666;text-align:center}
.version-link{margin-top:8px}
a{color:#0066CC}
.warning{background:#FFF3CD;border-left:4px solid #FFC107;padding:8px;margin:10px 0;font-size:13px}
</style>
</head>
<body>
<h1>Prism Music Search / 音乐搜索 (for old devices)</h1>
{main_content}
<div class="footer">
  <div class="version-link"><a href="?mobile=1&{query_params}">Mobile Version / 移动版</a></div>
  <div class="version-link"><a href="http://672.w0.am">老设备兼容站点</a></div>
  2025 antipa.cn | 2026 qwq672.top 重置 | No JavaScript | 支持音乐封面 | IE5/PSP/3DS...
</div>
</body>
</html>`;

// ================== 搜索结果页移动版模板 ==================
const RESULTS_MOBILE_HTML = `<!DOCTYPE html>
<html>
<head><meta charset=utf-8><meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes"><title>Prism Music Search - Results</title>
<style>
body{background:#F0F0F0; color:#000; font-family:Helvetica, Arial, sans-serif; font-size:16px; margin:0; padding:10px;}
h1{background:#DDD; color:#000; padding:12px; text-align:center; font-size:20px; margin:-10px -10px 0 -10px; border-bottom:1px solid #999;}
.search{background:#FFF; padding:12px; margin:12px 0; border:1px solid #CCC; text-align:center}
input.txt{width:90%; padding:10px; font-size:16px; margin-bottom:10px; border:1px solid #999; background:#FFF}
input.btn{width:96%; background:#EEE; color:#000; border:1px solid #888; padding:10px; font-size:18px; text-align:center; cursor:pointer}
.music-list{display:block}
.song-card{background:#FFF; margin-bottom:12px; padding:10px; border:1px solid #DDD; overflow:auto}
.cover-img{float:left; width:60px; margin-right:12px; text-align:center}
.cover-img img{width:48px; height:48px; border:1px solid #CCC}
.song-info{margin-left:72px}
.song-name{font-weight:bold; font-size:17px}
.singer{font-size:14px; color:#666; margin:3px 0}
.album{font-size:13px; color:#444; margin:2px 0}
.duration{font-size:12px; color:#888; margin:2px 0}
.actions{margin-top:8px}
.actions a{display:inline-block; margin-right:12px; color:#060; font-size:15px; margin-bottom:4px}
.footer{text-align:center; margin-top:16px; font-size:12px; color:#666}
.version-link{margin-top:8px}
.warning{background:#FFF3CD;border-left:4px solid #FFC107;padding:8px;margin:12px 0;font-size:14px}
</style>
</head>
<body>
<h1>Prism Music Search (Mobile) / 音乐搜索移动版</h1>
{main_content}
<div class="footer">
  <div class="version-link"><a href="?mobile=0&{query_params}">Desktop Version / 桌面版</a></div>
  <div class="version-link"><a href="http://672.w0.am">老设备兼容站点</a></div>
  2025 antipa.cn | 2026 qwq672.top 重制 | Touch friendly
</div>
</body>
</html>`;

const FRAGMENT_HTML = `{main_content}`;  // 用于 embed=1 模式

// ================== 辅助函数 ==================
function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/[&<>]/g, function(m) {
    if (m === '&') return '&amp;';
    if (m === '<') return '&lt;';
    if (m === '>') return '&gt;';
    return m;
  });
}

function toHttp(url) {
  if (!url) return '';
  return url.replace(/^https:\/\//i, 'http://');
}

async function callApiJson(apiUrl) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000);
  try {
    const response = await fetch(apiUrl, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; CloudflareWorker)' },
      signal: controller.signal
    });
    clearTimeout(timeoutId);
    let text = await response.text();
    if (text.charCodeAt(0) === 0xFEFF) text = text.slice(1);
    text = text.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '');
    return JSON.parse(text);
  } catch (err) {
    clearTimeout(timeoutId);
    return null;
  }
}

async function searchOld(keyword, page) {
  const pn = parseInt(page) || 1;
  const url = `${OLD_SEARCH_API}?key=${encodeURIComponent(keyword)}&pn=${pn}&rn=8`;
  const data = await callApiJson(url);
  if (!data || !data.data || !data.data.list) return [];
  return data.data.list.map(song => ({
    rid: song.rid,
    name: song.name || 'Unknown',
    artist: song.artist || 'Unknown',
    cover: song.pic ? toHttp(song.pic) : null
  }));
}

async function getPlayUrlOld(rid) {
  const url = `${OLD_PLAY_API}?mid=${rid}&type=music&br=128kmp3`;
  const data = await callApiJson(url);
  return (data && data.data && data.data.url) ? toHttp(data.data.url) : null;
}

async function fetchAlbumAndDuration(songName, artistName) {
  const url = `${KUGOU_SEARCH_API}&keyword=${encodeURIComponent(songName + ' ' + artistName)}&page=1&pagesize=1`;
  const data = await callApiJson(url);
  if (data && data.data && data.data.info && data.data.info.length > 0) {
    const first = data.data.info[0];
    return { album: first.album_name || '', duration: first.duration || '' };
  }
  return { album: '', duration: '' };
}

function formatDuration(seconds) {
  if (!seconds) return '';
  const s = parseInt(seconds);
  if (isNaN(s)) return '';
  const mins = Math.floor(s / 60);
  const secs = s % 60;
  return `${mins}:${secs < 10 ? '0' + secs : secs}`;
}

// ================== 搜索结果渲染（增加全页无播放链接提示） ==================
async function renderResults(query, page, isMobile, embedParam) {
  if (!query || query.trim() === '') return '';
  const songsBasic = await searchOld(query, page);
  if (!songsBasic.length) {
    return '<p style="text-align:center">No results found / 未找到相关歌曲</p>';
  }
  
  const enriched = await Promise.all(songsBasic.map(async (song) => {
    const extra = await fetchAlbumAndDuration(song.name, song.artist);
    const playUrl = await getPlayUrlOld(song.rid);
    return { ...song, album: extra.album, duration: extra.duration, playUrl };
  }));
  
  // 检查当前页所有歌曲是否都无法获取播放链接
  const allNoPlayUrl = enriched.every(song => !song.playUrl);
  let warningHtml = '';
  if (allNoPlayUrl && enriched.length > 0) {
    warningHtml = `<div class="warning">
      当前页面所有歌曲暂无法获取播放链接，可能是 API 服务器不稳定。请稍后重试或尝试其他关键词。<br>
      All songs on this page cannot get play links. The API server may be unstable. Please try again later or search other keywords.
    </div>`;
  }
  
  if (isMobile) {
    let html = '<div class="music-list">' + warningHtml;
    for (const s of enriched) {
      const coverHtml = s.cover ? `<a href="${s.cover}" target="_blank"><img src="${s.cover}" alt="cover" width="48" height="48"></a>` : '<span>No cover</span>';
      const durationStr = formatDuration(s.duration);
      html += `<div class="song-card">
        <div class="cover-img">${coverHtml}</div>
        <div class="song-info">
          <div class="song-name">${escapeHtml(s.name)}</div>
          <div class="singer">${escapeHtml(s.artist)}</div>
          ${s.album ? `<div class="album">Album: ${escapeHtml(s.album)}</div>` : ''}
          ${durationStr ? `<div class="duration">Duration: ${durationStr}</div>` : ''}
          <div class="actions">
            ${s.playUrl ? `<a href="${s.playUrl}">Play / 播放</a>` : 'No link'}
            ${s.cover ? `<a href="${s.cover}" target="_blank">Cover / 封面</a>` : ''}
          </div>
        </div>
      </div>`;
    }
    html += '</div>';
    // 分页
    let nav = '<div style="text-align:center; margin:16px 0;">';
    const p = parseInt(page) || 1;
    const emb = embedParam ? `&embed=${embedParam}` : '';
    const mobileParam = isMobile ? '&mobile=1' : '';
    if (p > 1) nav += `<a href="/?q=${encodeURIComponent(query)}&page=${p-1}${mobileParam}${emb}">Prev / 上一页</a> &nbsp; `;
    nav += `Page / 第 ${p} 页`;
    if (songsBasic.length === 8) nav += ` &nbsp; <a href="/?q=${encodeURIComponent(query)}&page=${p+1}${mobileParam}${emb}">Next / 下一页</a>`;
    nav += '</div>';
    return html + nav;
  } else {
    // 桌面版表格
    let html = warningHtml + '<table><th>Cover / 封面</th><th>Song Info / 歌曲信息</th></tr>';
    for (const s of enriched) {
      const coverCell = s.cover ? `<a href="${s.cover}" target="_blank"><img src="${s.cover}" class="cover-img" alt="cover" width="48" height="48"></a>` : 'No cover';
      const durationStr = formatDuration(s.duration);
      html += `<tr><td class="cover-cell">${coverCell}</td>
      <td>
        <div class="song-name">${escapeHtml(s.name)}</div>
        <div class="singer">${escapeHtml(s.artist)}</div>
        ${s.album ? `<div class="album">Album: ${escapeHtml(s.album)}</div>` : ''}
        ${durationStr ? `<div class="duration">Duration: ${durationStr}</div>` : ''}
        <div class="actions">
          ${s.playUrl ? `<a href="${s.playUrl}">Play / 播放</a>` : 'No link'}
          ${s.cover ? `<a href="${s.cover}" target="_blank">Cover / 封面</a>` : ''}
        </div>
      </td>
      </tr>`;
    }
    html += '</table>';
    // 分页
    let nav = '<div style="text-align:center;margin-top:15px">';
    const p = parseInt(page) || 1;
    const emb = embedParam ? `&embed=${embedParam}` : '';
    const mobileParam = isMobile ? '&mobile=1' : '';
    if (p > 1) nav += `<a href="/?q=${encodeURIComponent(query)}&page=${p-1}${mobileParam}${emb}">Prev / 上一页</a> &nbsp; `;
    nav += `Page / 第 ${p} 页`;
    if (songsBasic.length === 8) nav += ` &nbsp; <a href="/?q=${encodeURIComponent(query)}&page=${p+1}${mobileParam}${emb}">Next / 下一页</a>`;
    nav += '</div>';
    return html + nav;
  }
}

function getResultSearchForm(query, isMobile, embedParam) {
  const mobileHidden = isMobile ? '<input type="hidden" name="mobile" value="1">' : '';
  return `<div class="search">
    <form method="GET" action="/">
      <input type="hidden" name="embed" value="${embedParam || ''}">
      ${mobileHidden}
      <div class="search-row">
        <input type="text" name="q" class="txt" placeholder="搜索关键词 / Search Keyword" value="${escapeHtml(query)}">
        <input type="submit" class="btn" value="Search / 搜索">
      </div>
    </form>
  </div>`;
}

// ================== 主请求处理 ==================
async function handleRequest(request) {
  const url = new URL(request.url);
  const query = url.searchParams.get('q');
  const page = url.searchParams.get('page') || '1';
  const embed = url.searchParams.get('embed');
  const isMobile = url.searchParams.get('mobile') === '1';

  // 没有 q 参数时显示主页
  if (!query) {
    if (embed === '1') {
      const simpleForm = `<div style="text-align:center; padding:10px;"><form method="GET" action="/"><input type="text" name="q" placeholder="Search / 搜索"><input type="submit" value="Go"></form></div>`;
      return new Response(simpleForm, { headers: { 'Content-Type': 'text/html; charset=utf-8' } });
    }
    let homeHtml;
    if (isMobile) {
      homeHtml = HOME_MOBILE_HTML.replace('{query}', '');
    } else {
      homeHtml = HOME_PAGE_HTML.replace('{query}', '');
    }
    return new Response(homeHtml, { headers: { 'Content-Type': 'text/html; charset=utf-8' } });
  }

  // 搜索结果页
  const searchForm = getResultSearchForm(query, isMobile, embed);
  const resultArea = await renderResults(query, page, isMobile, embed);
  const mainContent = searchForm + resultArea;

  const queryParams = new URLSearchParams();
  queryParams.set('q', query);
  if (page !== '1') queryParams.set('page', page);
  if (embed) queryParams.set('embed', embed);
  if (isMobile) queryParams.set('mobile', '1');
  const queryString = queryParams.toString();

  let finalHtml;
  if (embed === '1') {
    finalHtml = FRAGMENT_HTML.replace('{main_content}', mainContent);
  } else if (isMobile) {
    finalHtml = RESULTS_MOBILE_HTML.replace('{main_content}', mainContent).replace('{query_params}', queryString);
  } else {
    finalHtml = RESULTS_FULL_HTML.replace('{main_content}', mainContent).replace('{query_params}', queryString);
  }
  return new Response(finalHtml, {
    headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-cache, no-store, must-revalidate' }
  });
}

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});
