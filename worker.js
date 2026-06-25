// ==================== 配置常量 ====================
const OLD_SEARCH_API = 'http://kuwo.bfmzdx.cn/kuwo/search/searchMusicBykeyWord';
const OLD_PLAY_API   = 'http://kuwo.bfmzdx.cn/kuwo/url';
const KUGOU_SEARCH_API = 'http://mobilecdn.kugou.com/api/v3/search/song?format=json';

// ==================== HTML 模板 ====================
// 桌面主页
const HOME_PAGE = `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html><head><meta charset=utf-8><title>Prism Music Search</title>
<style>body{background:#FFF;color:#000;font-family:SimSun,Arial;font-size:14px;margin:0;padding:20px}.container{max-width:800px;margin:0 auto;background:#FFF;padding:20px;border:1px solid #CCC}h1{color:#000;font-size:24px;margin-top:0;border-left:4px solid #888;padding-left:15px}.sub{color:#666;margin-bottom:30px}.search-box{background:#F5F5F5;padding:20px;text-align:center;border:1px solid #DDD}input.txt{width:70%;padding:8px;font-size:16px;border:1px solid #999}input.btn{padding:8px 16px;font-size:16px;background:#EEE;border:1px solid #888;cursor:pointer}.footer{margin-top:30px;font-size:12px;color:#999;text-align:center}a{color:#0066CC}.update-log{background:#FFFDE7;border-left:3px solid #BDB76B;padding:5px 10px;margin-top:20px;font-size:11px;text-align:left}.footer-line{margin-top:5px}</style>
</head><body><div class="container"><h1>Prism Music Search / 音乐搜索</h1><div class="sub">Search songs, get album info and play links / 搜索歌曲，获取专辑信息和播放链接</div>
<div class="search-box"><form method="GET" action="/"><input type="text" name="q" class="txt" placeholder="Song or artist / 歌曲或歌手" value="{query}"><input type="submit" class="btn" value="Search / 搜索"></form></div>
<div class="update-log"><strong>Update</strong> (2026-06-24): Inline player & download added</div>
<div class="footer"><div class="footer-line"><a href="?mobile=1">Mobile / 移动版</a> | <a href="http://672.w0.am">主站（老设备兼容）</a> | 2026 <strong>awa.lat</strong> remastered</div>
<div class="footer-line" style="font-size:11px;color:#aaa;">Based on antipa.cn tools (二次开发)</div></div></div></body></html>`;

// 移动主页（iOS 全屏）
const HOME_MOBILE = `<!DOCTYPE html><html><head><meta charset=utf-8><meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=yes"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"><link rel="apple-touch-icon" href="http://672.w0.am/img/music.png" sizes="57x57"><title>Prism Music Search</title>
<style>body{background:#F0F0F0;font-family:Helvetica,Arial,sans-serif;margin:0;padding:20px}.container{background:#FFF;padding:20px;border:1px solid #CCC;max-width:100%;box-sizing:border-box}h1{font-size:22px;margin-top:0}.sub{color:#666;margin-bottom:20px}input.txt{width:100%;padding:12px;font-size:16px;margin-bottom:12px;border:1px solid #999;box-sizing:border-box}input.btn{width:100%;padding:12px;font-size:18px;background:#EEE;border:1px solid #888}.footer{margin-top:20px;font-size:12px;text-align:center}.update-log{background:#FFFDE7;border-left:3px solid #BDB76B;padding:5px 10px;margin-top:15px;font-size:11px}.footer-line{margin-top:3px}</style>
</head><body><div class="container"><h1>Prism Music Search / 音乐搜索</h1><div class="sub">Search songs, get album info and play links / 搜索歌曲，获取专辑信息和播放链接</div>
<form method="GET" action="/"><input type="hidden" name="mobile" value="1"><input type="text" name="q" class="txt" placeholder="Song or artist / 歌曲或歌手" value="{query}"><input type="submit" class="btn" value="Search / 搜索"></form>
<div class="update-log"><strong>Update</strong> (2026-06-24): Inline player & download added</div>
<div class="footer"><div class="footer-line"><a href="?mobile=0">Desktop / 桌面版</a> | <a href="http://672.w0.am">主站（老设备兼容）</a></div>
<div class="footer-line">2026 <strong>awa.lat</strong> remastered</div><div class="footer-line" style="font-size:11px;color:#aaa;">Based on antipa.cn tools (二次开发)</div></div></div></body></html>`;

// 桌面结果页
const RESULTS_PAGE = `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html><head><meta charset=utf-8><title>Prism Music Search - Results</title>
<style>body{background:#FFF;color:#000;font-family:SimSun,Arial;font-size:14px;margin:10px}h1{background:#DDD;color:#000;padding:8px;text-align:center;font-size:16px;margin:0;border-bottom:1px solid #999}.search{background:#F5F5F5;padding:10px;margin-bottom:10px;border:1px solid #CCC}.search-row{text-align:center}input.txt{width:60%;padding:5px;border:1px solid #888;background:#FFF}input.btn{padding:3px 10px;background:#EEE;border:1px solid #888;color:#000}table{width:100%;border-collapse:collapse;margin-top:6px}th,td{padding:8px 5px;border-bottom:1px dotted #CCC;vertical-align:top;text-align:left}th{background:#EFEFEF}.cover-cell{width:60px;text-align:center;vertical-align:middle}.cover-img{width:48px;height:48px;border:1px solid #DDD}.song-name{font-weight:bold}.singer{font-size:12px;color:#666;margin:2px 0}.album{font-size:12px;color:#444;margin:2px 0}.duration{font-size:11px;color:#888;margin:2px 0}.actions{margin-top:5px}.actions a{margin-right:12px;color:#060}.footer{margin-top:20px;font-size:12px;color:#666;text-align:center}.version-link{margin-top:8px}a{color:#0066CC}.warning{background:#FFF3CD;border-left:4px solid #FFC107;padding:8px;margin:10px 0;font-size:13px}.footer-line{margin-top:3px}</style>
</head><body><h1>Prism Music Search / 音乐搜索 (for old devices)</h1>{main_content}
<div class="footer"><div class="version-link"><a href="?mobile=1&{query_params}">Mobile / 移动版</a></div>
<div class="version-link"><a href="http://672.w0.am">主站（老设备兼容）</a></div>
<div class="footer-line">2026 <strong>awa.lat</strong> remastered</div><div class="footer-line" style="font-size:11px;color:#aaa;">Based on antipa.cn tools (二次开发)</div></div></body></html>`;

// 移动结果页（含返回首页）
const RESULTS_MOBILE = `<!DOCTYPE html><html><head><meta charset=utf-8><meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=yes"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"><link rel="apple-touch-icon" href="http://672.w0.am/img/music.png" sizes="57x57"><title>Prism Music Search - Results</title>
<style>body{background:#F0F0F0;color:#000;font-family:Helvetica,Arial,sans-serif;font-size:16px;margin:0;padding:10px}h1{background:#DDD;color:#000;padding:12px;text-align:center;font-size:20px;margin:-10px -10px 0 -10px;border-bottom:1px solid #999}.search{background:#FFF;padding:12px;margin:12px 0;border:1px solid #CCC;text-align:center}input.txt{width:90%;padding:10px;font-size:16px;margin-bottom:10px;border:1px solid #999;background:#FFF}input.btn{width:96%;background:#EEE;color:#000;border:1px solid #888;padding:10px;font-size:18px;text-align:center;cursor:pointer}.music-list{display:block}.song-card{background:#FFF;margin-bottom:12px;padding:10px;border:1px solid #DDD;overflow:auto}.cover-img{float:left;width:60px;margin-right:12px;text-align:center}.cover-img img{width:48px;height:48px;border:1px solid #CCC}.song-info{margin-left:72px}.song-name{font-weight:bold;font-size:17px}.singer{font-size:14px;color:#666;margin:3px 0}.album{font-size:13px;color:#444;margin:2px 0}.duration{font-size:12px;color:#888;margin:2px 0}.actions{margin-top:8px}.actions a{display:inline-block;margin-right:12px;color:#060;font-size:15px;margin-bottom:4px}.footer{text-align:center;margin-top:16px;font-size:12px;color:#666}.version-link{margin-top:8px}.warning{background:#FFF3CD;border-left:4px solid #FFC107;padding:8px;margin:12px 0;font-size:14px}.home-link{text-align:center;margin-top:12px;padding:8px;background:#EEE;border:1px solid #CCC}.home-link a{font-size:18px;color:#0066CC;text-decoration:none}.footer-line{margin-top:3px}</style>
</head><body><h1>Prism Music Search (Mobile) / 音乐搜索移动版</h1>{main_content}
<div class="footer"><div class="version-link"><a href="?mobile=0&{query_params}">Desktop / 桌面版</a></div>
<div class="version-link"><a href="http://672.w0.am">主站（老设备兼容）</a></div>
<div class="footer-line">2026 <strong>awa.lat</strong> remastered</div><div class="footer-line" style="font-size:11px;color:#aaa;">Based on antipa.cn tools (二次开发)</div></div></body></html>`;
const FRAGMENT = `{main_content}`;

// ==================== 工具函数 ====================
function escapeHtml(s) { return s ? s.replace(/[&<>]/g, m => m==='&'?'&amp;':m==='<'?'&lt;':'&gt;') : ''; }
function toHttp(u) { return u ? u.replace(/^https:\/\//i, 'http://') : ''; }

async function callApiJson(url) {
  const c = new AbortController(), t = setTimeout(() => c.abort(), 10000);
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'CloudflareWorker' }, signal: c.signal });
    clearTimeout(t);
    let text = await res.text();
    if (text.charCodeAt(0) === 0xFEFF) text = text.slice(1);
    text = text.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '');
    return JSON.parse(text);
  } catch (e) { clearTimeout(t); return null; }
}

// ==================== 酷我搜索 ====================
async function searchOld(keyword, page) {
  const pn = parseInt(page) || 1;
  const url = `${OLD_SEARCH_API}?key=${encodeURIComponent(keyword)}&pn=${pn}&rn=8`;
  const data = await callApiJson(url);
  if (!data || !data.data || !data.data.list) return [];
  return data.data.list.map(s => ({
    rid: s.rid,
    name: s.name || 'Unknown',
    artist: s.artist || 'Unknown',
    cover: s.pic ? toHttp(s.pic) : null
  }));
}

async function getPlayUrlOld(rid) {
  const url = `${OLD_PLAY_API}?mid=${rid}&type=music&br=128kmp3`;
  const data = await callApiJson(url);
  return (data && data.data && data.data.url) ? toHttp(data.data.url) : null;
}

async function fetchAlbumAndDuration(name, artist) {
  const url = `${KUGOU_SEARCH_API}&keyword=${encodeURIComponent(name+' '+artist)}&page=1&pagesize=1`;
  const data = await callApiJson(url);
  if (data && data.data && data.data.info && data.data.info.length) {
    const first = data.data.info[0];
    return { album: first.album_name || '', duration: first.duration || '' };
  }
  return { album: '', duration: '' };
}

function formatDuration(sec) {
  if (!sec) return '';
  const s = parseInt(sec);
  if (isNaN(s)) return '';
  const m = Math.floor(s / 60), secs = s % 60;
  return m + ':' + (secs < 10 ? '0' + secs : secs);
}

// ==================== 结果渲染 ====================
async function renderResults(query, page, isMobile, embed) {
  if (!query || !query.trim()) return '';
  const songs = await searchOld(query, page);
  if (!songs.length) return '<p style="text-align:center">No results found / 未找到相关歌曲</p>';

  // 补充专辑和时长
  const enriched = await Promise.all(songs.map(async s => {
    const extra = await fetchAlbumAndDuration(s.name, s.artist);
    const play = await getPlayUrlOld(s.rid);
    return { ...s, album: extra.album, duration: extra.duration, playUrl: play };
  }));

  // 检测是否全无链接
  const allNo = enriched.every(s => !s.playUrl);
  let warn = '';
  if (allNo && enriched.length) {
    warn = `<div class="warning"><strong>提示 / Notice:</strong><br>当前页面所有歌曲暂无法获取播放链接，可能是 API 服务器不稳定。请稍后重试或尝试其他关键词。<br>All songs on this page cannot get play links. The API server may be unstable. Please try again later or search other keywords.</div>`;
  }

  // 构建单首歌曲 HTML（移动/桌面共用）
  const buildSong = (s) => {
    const cover = s.cover ? `<a href="${s.cover}" target="_blank"><img src="${s.cover}" alt="cover" width="48" height="48"></a>` : '<span>No cover</span>';
    const dur = formatDuration(s.duration);
    const pid = 'p_' + s.rid;
    const inline = `<div style="margin-top:6px;"><a href="javascript:void(0)" onclick="var a=document.getElementById('${pid}');if(a.paused){a.style.display='block';a.play();this.innerHTML='[暂停]';}else{a.pause();this.innerHTML='[HTML内嵌播放]';}">[HTML内嵌播放]</a><audio id="${pid}" style="display:none;width:100%;margin-top:4px;" controls preload="none" playsinline><source src="${s.playUrl||''}" type="audio/mpeg"></audio></div>`;
    const dl = s.playUrl ? `<a href="${s.playUrl}" download>下载 / Download</a>` : '';
    const actions = `<div class="actions">${s.playUrl ? `<a href="${s.playUrl}">Play / 播放</a>` : 'No link'}${s.cover ? ` <a href="${s.cover}" target="_blank">Cover / 封面</a>` : ''}${s.playUrl ? inline : ''}${s.playUrl ? dl : ''}</div>`;
    if (isMobile) {
      return `<div class="song-card"><div class="cover-img">${cover}</div><div class="song-info"><div class="song-name">${escapeHtml(s.name)}</div><div class="singer">${escapeHtml(s.artist)}</div>${s.album ? `<div class="album">Album: ${escapeHtml(s.album)}</div>` : ''}${dur ? `<div class="duration">Duration: ${dur}</div>` : ''}${actions}</div></div>`;
    } else {
      return `<tr><td class="cover-cell">${cover}</td><td><div class="song-name">${escapeHtml(s.name)}</div><div class="singer">${escapeHtml(s.artist)}</div>${s.album ? `<div class="album">Album: ${escapeHtml(s.album)}</div>` : ''}${dur ? `<div class="duration">Duration: ${dur}</div>` : ''}${actions}</td></tr>`;
    }
  };

  // 生成列表
  let list = '';
  if (isMobile) {
    list = '<div class="music-list">' + warn;
    enriched.forEach(s => list += buildSong(s));
    list += '</div>';
    // 分页
    let nav = '<div style="text-align:center;margin:16px 0;">';
    const pn = parseInt(page) || 1;
    const emb = embed ? `&embed=${embed}` : '';
    const mob = '&mobile=1';
    if (pn > 1) nav += `<a href="/?q=${encodeURIComponent(query)}&page=${pn-1}${mob}${emb}">Prev / 上一页</a> &nbsp; `;
    nav += `Page / 第 ${pn} 页`;
    if (songs.length === 8) nav += ` &nbsp; <a href="/?q=${encodeURIComponent(query)}&page=${pn+1}${mob}${emb}">Next / 下一页</a>`;
    nav += '</div>';
    const home = '<div class="home-link"><a href="/?mobile=1">返回首页 / Back to Home</a></div>';
    return list + nav + home;
  } else {
    list = warn + '<table><tr><th>Cover / 封面</th><th>Song Info / 歌曲信息</th></tr>';
    enriched.forEach(s => list += buildSong(s));
    list += '</table>';
    let nav = '<div style="text-align:center;margin-top:15px">';
    const pn = parseInt(page) || 1;
    const emb = embed ? `&embed=${embed}` : '';
    const mob = isMobile ? '&mobile=1' : '';
    if (pn > 1) nav += `<a href="/?q=${encodeURIComponent(query)}&page=${pn-1}${mob}${emb}">Prev / 上一页</a> &nbsp; `;
    nav += `Page / 第 ${pn} 页`;
    if (songs.length === 8) nav += ` &nbsp; <a href="/?q=${encodeURIComponent(query)}&page=${pn+1}${mob}${emb}">Next / 下一页</a>`;
    nav += '</div>';
    return list + nav;
  }
}

// ==================== 搜索表单 ====================
function getSearchForm(query, isMobile, embed) {
  const mh = isMobile ? '<input type="hidden" name="mobile" value="1">' : '';
  return `<div class="search"><form method="GET" action="/"><input type="hidden" name="embed" value="${embed||''}">${mh}<div class="search-row"><input type="text" name="q" class="txt" placeholder="搜索关键词 / Search Keyword" value="${escapeHtml(query)}"><input type="submit" class="btn" value="Search / 搜索"></div></form></div>`;
}

// ==================== 主处理 ====================
async function handleRequest(req) {
  const url = new URL(req.url);
  const q = url.searchParams.get('q');
  const page = url.searchParams.get('page') || '1';
  const embed = url.searchParams.get('embed');
  const isMobile = url.searchParams.get('mobile') === '1';

  // 主页
  if (!q) {
    if (embed === '1') {
      return new Response(`<div style="text-align:center;padding:10px;"><form method="GET" action="/"><input type="text" name="q" placeholder="Search / 搜索"><input type="submit" value="Go"></form></div>`, { headers: { 'Content-Type': 'text/html;charset=utf-8' } });
    }
    const homeHtml = isMobile ? HOME_MOBILE.replace('{query}', '') : HOME_PAGE.replace('{query}', '');
    return new Response(homeHtml, { headers: { 'Content-Type': 'text/html;charset=utf-8' } });
  }

  // 搜索结果
  const form = getSearchForm(q, isMobile, embed);
  const results = await renderResults(q, page, isMobile, embed);
  const main = form + results;

  const qp = new URLSearchParams();
  qp.set('q', q);
  if (page !== '1') qp.set('page', page);
  if (embed) qp.set('embed', embed);
  if (isMobile) qp.set('mobile', '1');
  const qs = qp.toString();

  let html;
  if (embed === '1') {
    html = FRAGMENT.replace('{main_content}', main);
  } else if (isMobile) {
    html = RESULTS_MOBILE.replace('{main_content}', main).replace('{query_params}', qs);
  } else {
    html = RESULTS_PAGE.replace('{main_content}', main).replace('{query_params}', qs);
  }
  return new Response(html, { headers: { 'Content-Type': 'text/html;charset=utf-8', 'Cache-Control': 'no-cache,no-store,must-revalidate' } });
}

addEventListener('fetch', e => { e.respondWith(handleRequest(e.request)); });
